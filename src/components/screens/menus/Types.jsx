import { useQuery } from "@apollo/client/react";
import { TYPES } from "../../../graphql/query";
import palette from "../../../styles/theme";
import Box from "../../base/Box";
import Grid from "../../base/Grid";
import { BodyText, Heading } from "../../base/Typography";
import Error from "../../shared/Error";
import Loading from "../../shared/Loading";

const Types = () => {
  const { loading, data, error } = useQuery(TYPES);

  return (
    <Box paddingLeft={30} paddingRight={30}>
      <Box paddingBottom={20}>
        <Heading>Types</Heading>
      </Box>
      <Box paddingBottom={20}>
        {loading && (
          <Loading />
        )}
        {error && (
          <Error />
        )}
        {data && (
          <Grid data-testid="gridTypeList">
            {data?.types?.results?.map((item, index) => {
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

export default Types;
