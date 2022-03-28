import { useQuery } from "@apollo/client";
import { LOCATIONS } from "../../../graphql/query";
import palette from "../../../styles/theme";
import Box from "../../base/Box";
import Grid from "../../base/Grid";
import { BodyText, Heading } from "../../base/Typography";
import Error from "../../shared/Error";
import Loading from "../../shared/Loading";

const Locations = () => {
  const { loading, data, error } = useQuery(LOCATIONS);

  return (
    <Box paddingLeft={30} paddingRight={30}>
      <Box paddingBottom={20}>
        <Heading>Locations</Heading>
      </Box>
      <Box paddingBottom={20}>
        {loading && (
          <Loading />
        )}
        {error && (
          <Error />
        )}
        {data && (
          <Grid data-testid="gridLocationList">
            {data?.locations?.results?.map((item, index) => {
              return (
                <Box key={index} cursor="pointer" padding={10} borderRadius={10} backgroundColor={palette.color.base.white}>
                  <BodyText fontWeight="bold" fontSize="20px" color={palette.color.base.black}>
                    {item?.name}
                  </BodyText>
                </Box>
              );
            })}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Locations;