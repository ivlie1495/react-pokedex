import Box from "../base/Box";
import { BodyText } from "../base/Typography";

const border = 'black solid';

const TabBar = ({ active, tabTitle, onChange }) => {
  return (
    <Box cursor="pointer" borderBottom={active ? border : null} onClick={onChange}>
      <BodyText fontWeight={active ? 'bold' : null}>
        {tabTitle}
      </BodyText>
    </Box>
  );
};

export default TabBar;