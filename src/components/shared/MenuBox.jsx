import palette from "../../styles/theme";
import Box from "../base/Box";
import { BodyText } from "../base/Typography";
import LinkNoDecoration from './LinkNoDecoration';

const MenuBox = ({ title, backgroundColor, href }) => {
  return (
    <Box flex={1}>
      <LinkNoDecoration to={href}>
        <Box padding={20} borderRadius={10} backgroundColor={backgroundColor}>
          <BodyText color={palette.color.base.white} fontWeight="bold">
            {title}
          </BodyText>
        </Box>
      </LinkNoDecoration>
    </Box>
  );
};

export default MenuBox;