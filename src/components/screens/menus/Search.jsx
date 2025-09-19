
import Box from "../../base/Box";
import FlexBox from "../../base/FlexBox";
import { BodyText, Heading } from "../../base/Typography";

const Search = () => {
  return (
    <Box paddingLeft={30} paddingRight={30}>
      <Box paddingBottom={20}>
        <Heading>Search</Heading>
      </Box>
      <Box paddingBottom={20}>
        <FlexBox justifyContent="center">
          <Box paddingTop={20}>
            <FlexBox justifyContent="center">
              <img 
                src="/images/not-found.png"
                alt="something-went-wrong"
                width="100%"
              />
            </FlexBox>
            <Box paddingTop={10}>
              <FlexBox justifyContent="center">
                <BodyText>This feature is under development</BodyText>
              </FlexBox>
            </Box>
          </Box>
        </FlexBox>
      </Box>
    </Box>
  );
};

export default Search;