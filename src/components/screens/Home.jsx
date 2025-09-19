import palette from "../../styles/theme";
import Box from "../base/Box";
import { BodyText, Heading, SubHeading } from "../base/Typography";
import FlexBox from "../base/FlexBox";
import MenuBox from "../shared/MenuBox";
import SeacrhTextField from "../shared/SearchTextField";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box padding={30} backgroundColor={palette.color.base.white} borderBottomLeftRadius={30} borderBottomRightRadius={30}>
        <Box paddingBottom={20}>
          <Heading>What Pokemon are you looking for?</Heading>
        </Box>  
        <Box display="flex" paddingBottom={30}>
          <SeacrhTextField placeholder="Search Pokemon" onFocus={() => navigate('/search')} />
        </Box>
        <Box display="flex" gap={10}>
          <MenuBox href="/pokemon" title="Pokemon" backgroundColor={palette.color.pokemon.grass} />
          <MenuBox href="/moves" title="Moves" backgroundColor={palette.color.pokemon.fire} />
        </Box>
        <Box display="flex" gap={10} paddingTop={20}>
          <MenuBox href="/abilities" title="Abilities" backgroundColor={palette.color.pokemon.water} />
          <MenuBox href="/genders" title="Genders" backgroundColor={palette.color.pokemon.electric} />
        </Box>
        <Box display="flex" gap={10} paddingTop={20}>
          <MenuBox href="/locations" title="Locations" backgroundColor={palette.color.pokemon.shadow} />
          <MenuBox href="/types" title="Types" backgroundColor={palette.color.pokemon.psychic} />
        </Box>
      </Box>
      <Box padding={30}>
        <Box>
          <SubHeading>Pokemon News</SubHeading>
        </Box>
        <FlexBox justifyContent="center">
          <Box paddingTop={20}>
            <FlexBox justifyContent="center">
              <img 
                src="/images/not-found.png"
                alt="something-went-wrong"
                width="100%"
              />
            </FlexBox>
            <Box paddingTop={10}>
              <FlexBox justifyContent="center">
                <BodyText>This feature is under development</BodyText>
              </FlexBox>
            </Box>
          </Box>
        </FlexBox>
      </Box>
    </>
  );
};

export default Home;