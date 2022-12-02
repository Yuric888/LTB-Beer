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
function App() {
  const containerRef = useRef(null);
  return (
    <BrowserRouter>
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <GlobalStyles />
          <AnimatePresence>
            <main data-scroll-container ref={containerRef}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menus" element={<Menus />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
