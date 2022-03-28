import { useQuery } from "@apollo/client";
import Box from "../../base/Box";
import Grid from "../../base/Grid";
import { Heading } from "../../base/Typography";
import { POKEMONS } from "../../../graphql/query";
import PokemonCard from "../../shared/PokemonCard";
import Loading from "../../shared/Loading";
import Error from "../../shared/Error";

const Pokemon = () => {
  const { loading, data, error } = useQuery(POKEMONS, {
    variables: {
      limit: 100,
      offset: 1,
    }
  });

  return (
    <Box paddingLeft={30} paddingRight={30}>
      <Box paddingBottom={20}>
        <Heading>Pokemon</Heading>
      </Box>
      <Box paddingBottom={20}>
        {loading && (
          <Loading />
        )}
        {error && (
          <Error />
        )}
        {data && (
          <Grid data-testid="gridPokemonList">
            {data?.pokemons?.results?.map((item) => (
              <PokemonCard key={item?.id} name={item?.name} image={item?.image} />
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Pokemon;