import { Circles } from 'react-loader-spinner';
import Box from '../base/Box';
import FlexBox from '../base/FlexBox';
import { BodyText } from '../base/Typography';

const Loading = () => {
  return (
    <FlexBox justifyContent="center">
      <Box>
        <FlexBox justifyContent="center">
          <Circles color="#00BFFF" height={80} width={80}/>
        </FlexBox>
        <BodyText>Getting your data ready...</BodyText>
      </Box>
    </FlexBox>
  );
};

export default Loading;