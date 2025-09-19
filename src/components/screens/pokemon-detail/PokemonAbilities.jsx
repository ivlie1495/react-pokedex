import { useContext } from "react";
import palette from "../../../styles/theme";
import Box from "../../base/Box";
import { BodyText } from "../../base/Typography";
import { PokemonDetailContext } from "../menus/PokemonDetail";

const PokemonAbilities = () => {
  const value = useContext(PokemonDetailContext);

  return (
    <Box display="flex" flexWrap="wrap" paddingTop={10} gap={10}>
      {value?.data?.pokemon?.abilities?.map((item, index) => (
        <Box key={index} paddingTop={5} paddingBottom={5} paddingLeft={10} paddingRight={10} borderRadius={10} backgroundColor={palette.color.pokemon.ground}>
          <BodyText color={palette.color.base.white} fontWeight="bold">{item?.ability?.name}</BodyText>
        </Box>
      ))}
    </Box>
  );
};

export default PokemonAbilities;