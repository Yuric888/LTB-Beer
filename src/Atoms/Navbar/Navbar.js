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
        <Item>
          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <p>Home</p>
          </NavLink>
        </Item>
        <Item>
          <NavLink
            to="/menus"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <p>Menus</p>
          </NavLink>
        </Item>
        <Item>
          <NavLink
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <p>Contact Us</p>
          </NavLink>
        </Item>
      </Items>
    </Section>
  );
};

export default Navbar;
const Section = styled(motion.div)`
  margin-right: 10%;
`;
const Items = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    a {
      position: relative;

      &::before {
        position: absolute;
        z-index: 20;
        bottom: -5px;
        left: 0;
        /* transform: translateX(-50%); */
        height: 2px;
        content: "";
        width: 100%;
        transform: scale(0);
        transition: all 0.2s ease;
        background-color: ${(props) => props.theme.text};
      }
      &:hover {
        &::before {
          transform: scale(1);
        }
      }
    }
  }
`;
