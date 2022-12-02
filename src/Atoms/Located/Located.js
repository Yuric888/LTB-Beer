import styled from "styled-components";
import { motion } from "framer-motion";
const Section = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;

  margin: 20px auto 0;
  color: ${(props) => props.theme.text};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  h1 {
    font-size: ${(props) => props.theme.fontlg};
    cursor: pointer;
  }
`;
const address = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
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
    },
  },
};
const Located = () => {
  return (
    <Section>
      <motion.h1
        variants={address}
        initial="hidden"
        animate="show"
        whileHover={{ color: "#bebebe" }}
      >
        40/7 Le Thi Hong
      </motion.h1>
      <motion.p variants={phone} initial="hidden" animate="show">
        (84) 12345678
      </motion.p>
    </Section>
  );
};

export default Located;
