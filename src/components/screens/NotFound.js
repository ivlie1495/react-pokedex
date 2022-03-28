import Box from "../base/Box";
import FlexBox from "../base/FlexBox";
import { BodyText } from "../base/Typography";

const NotFound = () => {
  return (
    <Box padding={30}>
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
              <BodyText>Something went wrong. 404 pages.</BodyText>
            </FlexBox>
          </Box>
        </Box>
      </FlexBox>
    </Box>
  );
};

export default NotFound;