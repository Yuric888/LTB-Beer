import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Molecules/Header/Header";
import NavMenu from "../../Molecules/NavMenu/NavMenu";
import Slider from "../../Organism/Slider/Slider";
const Section = styled.div``;
const Menus = () => {
  return (
    <Section>
      <Header />
      <Slider />
      <NavMenu />
      <Outlet />
    </Section>
  );
};

export default Menus;
