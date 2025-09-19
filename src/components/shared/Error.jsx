import Box from '../base/Box';
import FlexBox from '../base/FlexBox';
import { BodyText } from '../base/Typography';

const Error = () => {
  return (
    <FlexBox justifyContent="center">
      <Box>
        <FlexBox justifyContent="center">
          <img 
            src="/images/not-found.png"
            alt="something-went-wrong"
            width="100%"
          />
        </FlexBox>
        <Box paddingTop={10}>
          <FlexBox justifyContent="center">
            <BodyText>Something went wrong...</BodyText>
          </FlexBox>
        </Box>
      </Box>
    </FlexBox>
  );
};

export default Error;