import { Route, Routes } from "react-router-dom";
import Box from "../base/Box";
import BackButton from "../shared/BackButton";
import Abilities from "./menus/Abilities";
import Types from "./menus/Types";
import Genders from "./menus/Genders";
import Locations from "./menus/Locations";
import Moves from "./menus/Moves";
import Pokemon from "./menus/Pokemon";
import PokemonDetail from "./menus/PokemonDetail";
import Pokedex from "./menus/Pokedex";
import FlexBox from "../base/FlexBox";
import PokeDexButton from "../shared/PokeDexButton";
import Search from "./menus/Search";

const Menus = () => {
  return (
    <Box>
      <Box padding={30}>
        <FlexBox justifyContent="space-between" alignItems="center">
          <BackButton />
          <PokeDexButton />
        </FlexBox>
      </Box>
      <Box>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/menus/pokemon" element={<Pokemon />} />
          <Route path="/menus/pokemon/:name" element={<PokemonDetail />} />
          <Route path="/menus/moves" element={<Moves />} />
          <Route path="/menus/abilities" element={<Abilities />} />
          <Route path="/menus/genders" element={<Genders />} />
          <Route path="/menus/locations" element={<Locations />} />
          <Route path="/menus/types" element={<Types />} />
          <Route path="/menus/pokedex" element={<Pokedex />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Menus;
