import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imgLogo from "../../assets/images/logo_LTB.jpg";

const pathVariants = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};
const textVariants = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, delay: 1 },
  },
};
const Logo = () => {
  return (
    <Section>
      <Link to="/">
        <motion.img
          variants={pathVariants}
          initial="hidden"
          animate="show"
          src={imgLogo}
          alt="logo"
        ></motion.img>
        <motion.p variants={textVariants} initial="hidden" animate="show">
          long thanh beer
        </motion.p>
      </Link>
    </Section>
  );
};

export default Logo;

const Section = styled.div`
  padding: 20px;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }

  img {
    width: 5rem;
    height: auto;
    transition: 0.5s;
  }
  p {
    font-size: ${(props) => props.theme.fontlg};
    font-family: ${(props) => props.theme.font};
    text-transform: uppercase;
    color: ${(props) => props.theme.text};
  }
`;
