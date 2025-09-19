import palette from "../../styles/theme";
import Box from "../base/Box";
import FlexBox from "../base/FlexBox";
import { BodyText } from "../base/Typography";
import LinkNoDecoration from "./LinkNoDecoration";

const PokemonCard = ({ name, image, nickname }) => {
  return (
    <Box cursor="pointer" padding={5} borderRadius={10} backgroundColor={palette.color.base.white}>
      <LinkNoDecoration to={`/pokemon/${name}`}>
        <FlexBox alignItems="center">
          <img 
            src={image}
            alt="pokemon" 
            style={{ height: '70px' }}
          />
          <Box>
            <BodyText fontWeight="bold" fontSize="20px" color={palette.color.base.black}>
              {name}
            </BodyText>
            <BodyText fontSize="12px" color={palette.color.base.black}>
              {nickname ? nickname : `Owned: ${localStorage.getItem(name) ?? 0}`}
            </BodyText>
          </Box>
        </FlexBox>
      </LinkNoDecoration>
    </Box>
  );
};

export default PokemonCard;