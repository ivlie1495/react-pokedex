import { SpinnerCircular } from 'spinners-react';
import Box from '../base/Box';
import FlexBox from '../base/FlexBox';
import { BodyText } from '../base/Typography';

const Loading = () => {
  return (
    <FlexBox justifyContent="center">
      <Box>
        <FlexBox justifyContent="center">
          <SpinnerCircular
            size={80}
            thickness={180}
            speed={100}
            color="#00BFFF"
            secondaryColor="rgba(0, 191, 255, 0.3)"
          />
        </FlexBox>
        <BodyText>Getting your data ready...</BodyText>
      </Box>
    </FlexBox>
  );
};

export default Loading;
