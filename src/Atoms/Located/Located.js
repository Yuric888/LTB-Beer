import styled from "styled-components";
import { motion } from "framer-motion";

const address = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      delay: 1,
    },
  },
};
const phone = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      delay: 1,
    },
  },
};
const Located = () => {
  return (
    <Section>
      <motion.p
        variants={address}
        initial="hidden"
        animate="show"
        whileHover={{ color: "#bebebe" }}
      >
        40/7 Le Thi Hong
      </motion.p>
      <motion.p variants={phone} initial="hidden" animate="show">
        (84) 12345678
      </motion.p>
    </Section>
  );
};

export default Located;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  width: 100%;
  padding: 6px;
  background-color: ${(props) => props.theme.body};
  p {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => props.theme.text};

    cursor: pointer;
  }
  p {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => props.theme.text};
  }
`;
