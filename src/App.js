import { Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import Menus from "./components/screens/Menus";
import './index.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Menus />} />
    </Routes>
  );
}

export default App;
