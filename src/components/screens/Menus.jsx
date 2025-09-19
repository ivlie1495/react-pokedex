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
import FlexBox from "../base/FlexBox";
import PokeDexButton from "../shared/PokeDexButton";
import Search from "./menus/Search";
import PokeBag from "./menus/PokeBag";
import NotFound from "./NotFound";

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
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
          <Route path="/moves" element={<Moves />} />
          <Route path="/abilities" element={<Abilities />} />
          <Route path="/genders" element={<Genders />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/types" element={<Types />} />
          <Route path="/pokebag" element={<PokeBag />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Menus;
