import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Themes";
import { AnimatePresence } from "framer-motion";
import Menus from "./Pages/Menus/Menus";
import Contact from "./Pages/Contact/Contact";
import MenuBeer from "./Organism/MenuBeer/MenuBeer";
import MenuDinner from "./Organism/MenuDinner/MenuDinner";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menus" element={<Menus />}>
            <Route path="" element={<MenuBeer />} />
            <Route path="dinner" element={<MenuDinner />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
