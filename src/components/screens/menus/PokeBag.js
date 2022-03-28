import Box from "../../base/Box";
import Grid from "../../base/Grid";
import { Heading } from "../../base/Typography";
import PokemonCard from "../../shared/PokemonCard";

const PokeBag = () => {
  const pokeDexStorage = localStorage.getItem('pokedex');
  const listPokeDex = pokeDexStorage ? JSON.parse(pokeDexStorage) : [];

  return (
    <Box paddingLeft={30} paddingRight={30}>
      <Box paddingBottom={20}>
        <Heading>Poke Bag</Heading>
      </Box>
      <Box paddingBottom={20}>
        <Grid>
          {listPokeDex.map((item) => (
            <PokemonCard key={item?.id} name={item?.name} nickname={item?.nickname} image={item?.image} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PokeBag;