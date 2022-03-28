import { useContext } from "react";
import palette from "../../../styles/theme";
import Box from "../../base/Box";
import FlexBox from "../../base/FlexBox";
import { BodyText } from "../../base/Typography";
import Line from "../../shared/Line";
import { PokemonDetailContext } from "../menus/PokemonDetail";

const PokemonBaseStats = () => {
  const value = useContext(PokemonDetailContext);

  return (
    <Box>
      <BodyText fontWeight="bold">Stats</BodyText>
      {value?.data?.pokemon?.stats?.map((item, index) => (
        <FlexBox key={index} justifyContent="space-between">
          <BodyText>{item?.stat?.name}</BodyText>
          <Box paddingLeft={10} paddingRight={10} flexGrow={1}>
            <Line color={index % 2 === 0 ? palette.color.pokemon.fire : palette.color.pokemon.grass} />
          </Box>
          <BodyText fontWeight="bold">{item?.base_stat}</BodyText>
        </FlexBox>
      ))}
    </Box>
  );
};

export default PokemonBaseStats;