import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Item = styled(motion.li)`
  color: ${(props) => props.theme.grey};
  padding: 0 20px;
  font-size: ${(props) => props.theme.fontlg};
  a.active {
    color: ${(props) => props.theme.text};
  }
`;
const container = {
  hidden: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: 2,
    },
  },
};
const Navbar = () => {
  return (
    <Section variants={container} initial="hidden" animate="show">
      <Items>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          <NavLink to="/menus">
            <p>Menus</p>
          </NavLink>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          <NavLink to="/contact">
            <p>Contact Us</p>
          </NavLink>
        </Item>
      </Items>
    </Section>
  );
};

export default Navbar;
const Section = styled(motion.div)`
  padding-right: 20px;
`;
const Items = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
