import { motion } from "framer-motion";
import styled from "styled-components";
import imgLogo from "../../assets/images/logo_LTB.jpg";
const Section = styled(motion.div)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;

  display: flex;
  align-items: center;
  gap: 0 10px;

  img {
    width: 6rem;
    height: auto;
  }
  p {
    font-size: ${(props) => props.theme.fontlg};
    font-family: ${(props) => props.theme.font};
    text-transform: uppercase;
    color: ${(props) => props.theme.text};
  }
`;
const pathVariants = {
  hidden: { y: -200, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 2, ease: "easeInOut" } },
};
const textVariants = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut", delay: 2 },
  },
};
const Logo = () => {
  return (
    <Section>
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
    </Section>
  );
};

export default Logo;
