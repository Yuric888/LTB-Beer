import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  min-width: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px ${(props) => props.theme.body};
  padding: 6px 20px;
  span {
    font-weight: 500;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontlg};
    letter-spacing: 1px;
  }
`;
const VariantHover = {
  tap: {
    color: "#202020",
    backgroundColor: "#fff",
  },
  hover: {
    color: "#fff",
    backgroundColor: "#202020",
    duration: 0.09,
    boxShadow: " 5px 5px 5px rgba(0, 0, 0, 0.2)",
  },
};
const Button = ({ title }) => {
  return (
    <Container whileHover="hover" whileTap="tap" variants={VariantHover}>
      <span>{title}</span>
    </Container>
  );
};

export default Button;
