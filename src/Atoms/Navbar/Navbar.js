import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Located from "../Located/Located";

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
  const [mobile, setMobile] = useState(false);

  return (
    <Section
      variants={container}
      initial="hidden"
      animate="show"
      mobile={mobile}
    >
      <Burger onClick={() => setMobile(!mobile)} mobile={mobile}>
        <span></span>
        <span></span>
        <span></span>
      </Burger>
      <Items mobile={mobile}>
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
        <Unline></Unline>
        <Address>
          <Located />
        </Address>
      </Items>
    </Section>
  );
};

export default Navbar;
const Address = styled.div`
  @media (min-width: 680px) {
    display: none;
    opacity: 0;
  }
`;
const Unline = styled.div`
  width: 80%;
  height: 1px;
  background-color: ${(props) => props.theme.text};
  @media (min-width: 680px) {
    display: none;
    opacity: 0;
  }
`;

const Section = styled(motion.div)`
  @media (max-width: 679px) {
    margin-right: 10%;
  }
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
  @media (max-width: 679px) {
    position: fixed;
    top: ${(props) => (props.mobile === true ? `0` : "-100%")};
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: ${(props) => props.theme.body};
    transition: all 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3em 0;
    padding-top: 10%;
    margin: 0;
  }
`;
const Item = styled(motion.li)`
  color: ${(props) => props.theme.grey};
  padding: 0 20px;
  a.active {
    color: ${(props) => props.theme.text};
  }
  @media (max-width: 1079px) {
    font-size: ${(props) => props.theme.md};
  }
  @media (min-width: 1080px) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const Burger = styled.div`
  display: inline-block;
  opacity: 1;

  position: fixed;
  top: 10%;
  right: 10%;
  cursor: pointer;
  user-select: none;
  order: -1;
  z-index: 100;
  width: 1.75rem;
  height: 1rem;
  border: none;
  outline: none;
  background: none;
  visibility: visible;
  transform: rotate(0deg);
  transition: 0.35s ease;
  span {
    position: absolute;
    display: block;
    right: 0;
    width: 100%;
    height: 2px;
    border: none;
    outline: none;
    opacity: 1;
    transform: rotate(0deg);
    background-color: ${(props) => props.theme.text};
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: ${(props) => (props.mobile === true ? "0.5em" : "0px")};
      transform: ${(props) =>
        props.mobile === true ? " rotate(135deg)" : "rotate(0deg)"};
    }
    &:nth-child(2) {
      top: ${(props) => (props.mobile === true ? "0.5em" : "0.5em")};
      /* right: ${(props) => (props.mobile === true ? "-1.5em" : "0")}; */
      opacity: ${(props) => (props.mobile === true ? "0" : "1")};
      visibility: ${(props) => (props.mobile === true ? "hidden" : "visible")};
    }
    &:nth-child(3) {
      top: ${(props) => (props.mobile === true ? "0.5rem" : "1em")};
      transform: ${(props) =>
        props.mobile === true ? " rotate(-135deg)" : "rotate(0deg)"};
    }
  }

  @media (min-width: 680px) {
    display: none;
    opacity: 0;
  }
`;
