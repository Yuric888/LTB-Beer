import { useRef } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Molecules/Header/Header";
import NavMenu from "../../Molecules/NavMenu/NavMenu";
import SlickComponent from "../../Organism/Slider/Slider";
import { motion } from "framer-motion";
import { FadeInWhenVisible } from "../../utils/FadeInWhenVisible";
const Section = styled.div``;
const Menus = () => {
  const ref = useRef(null);

  return (
    <Section>
      <Header />
      <FadeInWhenVisible>
        <SlickComponent />
      </FadeInWhenVisible>
      <Title>
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1 variants={item}>m</motion.h1>
          <motion.h1 variants={item}>e</motion.h1>
          <motion.h1 variants={item}>n</motion.h1>
          <motion.h1 variants={item}>u</motion.h1>
          <motion.h1 variants={item}>s</motion.h1>
        </motion.div>
        <motion.h2 variants={item2} initial="hidden" animate="show">
          satisfied. interesting. delicious
        </motion.h2>
      </Title>
      <FadeInWhenVisible>
        <NavMenu ref={ref} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Outlet />
      </FadeInWhenVisible>
    </Section>
  );
};

export default Menus;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const item2 = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0, transition: { duration: 2 } },
};
const Title = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  pointer-events: none;
  div {
    display: flex;
    flex-direction: row;
    gap: 0 20px;
    pointer-events: none;
  }
  h1 {
    font-size: ${(props) => props.theme.fontBig};
    color: ${(props) => props.theme.text};
    font-family: ${(props) => props.theme.font};
    text-shadow: 2px 2px 2px ${(props) => props.theme.body};
    font-style: italic;
    text-transform: uppercase;
    pointer-events: none;
  }
  h2 {
    font-size: ${(props) => props.theme.fontlg};
    color: ${(props) => props.theme.text};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    text-transform: capitalize;
    font-weight: 500;
    pointer-events: none;
  }
`;
