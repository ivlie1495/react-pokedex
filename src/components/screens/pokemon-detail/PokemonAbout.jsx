import { useContext } from "react";
import Box from "../../base/Box";
import FlexBox from "../../base/FlexBox";
import { BodyText } from "../../base/Typography";
import { PokemonDetailContext } from "../menus/PokemonDetail";

const PokemonAbout = () => {
  const value = useContext(PokemonDetailContext);

  return (
    <Box>
      <BodyText fontWeight="bold">Physical</BodyText>
      <FlexBox justifyContent="space-between">
        <BodyText>Weight</BodyText>
        <BodyText fontWeight="bold">{value?.data?.pokemon?.weight}</BodyText>
      </FlexBox>
      <FlexBox justifyContent="space-between">
        <BodyText>Height</BodyText>
        <BodyText fontWeight="bold">{value?.data?.pokemon?.height}</BodyText>
      </FlexBox>
    </Box>
  );
};

export default PokemonAbout;