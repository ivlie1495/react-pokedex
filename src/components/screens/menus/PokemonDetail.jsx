import { useQuery } from "@apollo/client/react";
import { createContext, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import { POKEMON } from "../../../graphql/query";
import palette from "../../../styles/theme";
import Box from "../../base/Box";
import Button from "../../base/Button";
import FlexBox from "../../base/FlexBox";
import Modal from "../../base/Modal";
import TextField from "../../base/TextField";
import { BodyText, Heading } from "../../base/Typography";
import { TAB_MENU_ABILITIES, TAB_MENU_ABOUT, TAB_MENU_BASE_STATS, TAB_MENU_MOVES } from "../../constants/menus";
import Loading from "../../shared/Loading";
import TabBar from "../../shared/TabBar";
import PokemonAbilities from "../pokemon-detail/PokemonAbilities";
import PokemonAbout from "../pokemon-detail/PokemonAbout";
import PokemonBaseStats from "../pokemon-detail/PokemonBaseStats";
import PokemonMoves from "../pokemon-detail/PokemonMoves";
import Error from "../../shared/Error";

export const PokemonDetailContext = createContext();

const PokemonDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(POKEMON, {
    variables: {
      name: name,
    }
  });
  const [ activeMenu, setActiveMenu ] = useState(TAB_MENU_ABOUT);
  const [ showModal, setShowModal ] = useState(false);
  const [ failedCatch, setFailedCatch ] = useState(false);
  const [ errorSave, setErrorSave ] = useState(null);
  const inputNicknameRef = useRef(null);

  const catchPokemon = () => {
    const random = Math.random();

    if (random < 0.5) {
      setFailedCatch(true);
    } else {
      setFailedCatch(false);
      setShowModal(true);
    }
  };

  const savePokeDex = () => {
    const { value } = inputNicknameRef.current;

    if (value && value.length > 0) {
      const totalCatched = localStorage.getItem(name);
      const calcutaleTotalCatched = totalCatched ? parseInt(totalCatched) + 1 : 1;
      localStorage.setItem(name, calcutaleTotalCatched);

      const pokeDexItem = localStorage.getItem('pokedex');
      const storagePokeDex = pokeDexItem ? JSON.parse(pokeDexItem) : [];
      const filteredPokemonStoragePokeDex = storagePokeDex.filter((item) => item?.name === name);
      const hasNickname = filteredPokemonStoragePokeDex.some((item) => item?.nickname === value);

      if (!hasNickname) {
        storagePokeDex.push({ 
          id: `${data?.pokemon?.id}_${value}`, 
          name, 
          nickname: value, 
          image: data?.pokemon?.sprites?.front_default 
        });
        localStorage.setItem('pokedex', JSON.stringify(storagePokeDex));
        
        setErrorSave(null);
        setShowModal(false);

        navigate('/pokebag');
      } else {
        setErrorSave('Nickname already exist, use different name');  
      }
    } else {
      setErrorSave('Please fill in the input');
    }
  };

  const cancelSubmit = () => {
    setShowModal(false);
    setErrorSave(null);
  };

  if (error) {
    return (
      <Error />
    );
  }

  return (
    <Box data-testid="boxDetailPokemon">
      {showModal && (
        <Modal data-testid="modalSetNickname">
          <FlexBox justifyContent="center">
            <Box width="350px" backgroundColor={palette.color.base.white} padding={20} margin={20} borderRadius={20}>
              <Box paddingBottom={10}>
                <BodyText>Catched! Give your pokemon a nickname.</BodyText>
              </Box>
              <Box display="flex" paddingBottom={10}>
                <TextField ref={inputNicknameRef} />
              </Box>
              {errorSave && (
                <Box>
                  <BodyText color={palette.color.pokemon.fire}>
                    {errorSave}
                  </BodyText>
                </Box>
              )}
              <Box>
                <FlexBox justifyContent="end" alignItems="center" gap={10}>
                  <Button variant="secondary" onClick={cancelSubmit}>
                    <BodyText fontWeight="bold">
                      Cancel
                    </BodyText>
                  </Button>
                  <Button variant="primary" onClick={savePokeDex}>
                    <BodyText fontWeight="bold">
                      Submit
                    </BodyText>
                  </Button>
                </FlexBox>
              </Box>
            </Box>
          </FlexBox>
        </Modal>
      )}
      <Box paddingLeft={30} paddingRight={30}>
        <Box paddingBottom={20}>
          {loading && (
            <Skeleton width={150} height={30} />
          )}
          {data &&(
            <Heading>{data?.pokemon?.name}</Heading>
          )}
        </Box>
        <Box paddingBottom={20} display="flex" gap={10}>
          {loading && (
            <Skeleton width={90} height={30} />
          )}
          {data && data?.pokemon?.types?.map((item) => (
            <Box key={item?.type?.name} paddingTop={5} paddingBottom={5} paddingLeft={10} paddingRight={10} borderRadius={10} backgroundColor={palette.color.pokemon[item?.type?.name]}>
              <BodyText color={palette.color.base.white} fontWeight="bold">
                {item?.type?.name}
              </BodyText>
            </Box>
          ))}
        </Box>
        {loading && (
          <FlexBox justifyContent="center">
            <Box padding={5}>
              <Skeleton width={90} height={90} />
            </Box>
          </FlexBox>
        )}
        {data && (
          <FlexBox justifyContent="center">
            <img 
              src={data?.pokemon?.sprites?.front_default}
              alt="pokemon"
              width={150}
            />
            <img 
              src={data?.pokemon?.sprites?.back_default}
              alt="pokemon"
              width={150}
            />
          </FlexBox>
        )}
        {failedCatch && (
          <Box paddingBottom={10}>
            <FlexBox justifyContent="center">
              <BodyText data-testid="failedCatchText" color={palette.color.pokemon.fire}>
                Failed! Try again.
              </BodyText>
            </FlexBox>
          </Box>
        )}
        <Box paddingBottom={20}>
          <FlexBox justifyContent="center">
            {loading && (
              <Box margin={10}>
                <Skeleton width={150} height={30} />
              </Box>
            )}
            {data && (
              <Button data-testid="buttonCatchPokemon" variant="primary" onClick={catchPokemon}>
                <BodyText fontWeight="bold">
                  Catch the Pokemon
                </BodyText>
              </Button>
            )}
          </FlexBox>
        </Box>
      </Box>
      <Box>
        <Box backgroundColor={palette.color.base.white} borderTopLeftRadius={30} borderTopRightRadius={30}>
          <Box padding={20}>
            <FlexBox justifyContent="space-between">
              <TabBar 
                active={activeMenu === TAB_MENU_ABOUT}
                onChange={() => setActiveMenu(TAB_MENU_ABOUT)}
                tabTitle="About"
              />
              <TabBar 
                active={activeMenu === TAB_MENU_BASE_STATS}
                onChange={() => setActiveMenu(TAB_MENU_BASE_STATS)}
                tabTitle="Base Stats"
              />
              <TabBar 
                active={activeMenu === TAB_MENU_MOVES}
                onChange={() => setActiveMenu(TAB_MENU_MOVES)}
                tabTitle="Moves"
              />
              <TabBar 
                active={activeMenu === TAB_MENU_ABILITIES}
                onChange={() => setActiveMenu(TAB_MENU_ABILITIES)}
                tabTitle="Abilities"
              />
            </FlexBox>
          </Box>
          <Box minHeight="40vh" paddingLeft={20} paddingRight={20} paddingBottom={20}>
            {loading && (
              <Loading />
            )}
            {data && (
              <PokemonDetailContext.Provider value={{ loading, data, error }}>
                {activeMenu === TAB_MENU_ABOUT && (
                  <PokemonAbout />
                )}
                {activeMenu === TAB_MENU_BASE_STATS && (
                  <PokemonBaseStats />
                )}
                {activeMenu === TAB_MENU_MOVES && (
                  <PokemonMoves />
                )}
                {activeMenu === TAB_MENU_ABILITIES && (
                  <PokemonAbilities />
                )}
              </PokemonDetailContext.Provider>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonDetail;
