import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const VariantHover = {
  tap: {
    color: "#202020",
    backgroundColor: "#fff",
  },
  hover: {
    color: "#fff",
    backgroundColor: "#202020",
    duration: 0.09,
    boxShadow: " 5px 5px 5px rgba(0, 0, 0, 0.5)",
  },
};

const NavMenu = (props, ref) => {
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", inline: "center" });
  };
  return (
    <Section ref={ref}>
      <ul>
        <motion.li
          onClick={handleClick}
          whileHover="hover"
          whileTap="tap"
          variants={VariantHover}
        >
          <NavLink to="" end>
            <span>beer</span>
          </NavLink>
        </motion.li>
        <motion.li
          onClick={handleClick}
          whileHover="hover"
          whileTap="tap"
          variants={VariantHover}
        >
          <NavLink to="dinner">
            <span>dinner</span>
          </NavLink>
        </motion.li>
      </ul>
    </Section>
  );
};

export default forwardRef(NavMenu);

const Section = styled.div`
  width: 100vw;
  margin: 0 auto;
  padding: 80px 0;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 30px;
    li {
      a {
        min-width: 8em;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 2px ${(props) => props.theme.body};
        padding: 6px 20px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 500;
        font-size: ${(props) => props.theme.fontlg};
      }
      a.active {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
      }
    }
  }
`;
