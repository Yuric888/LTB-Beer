import { motion } from "framer-motion";
import styled from "styled-components";
import Video from "../../Atoms/Video/Video";
const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const Title = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  pointer-events: none;
  div {
    display: flex;
    flex-direction: row;
    gap: 0 20px;
  }
  h1 {
    font-size: ${(props) => props.theme.fontBig};
    color: ${(props) => props.theme.text};
    font-family: ${(props) => props.theme.font};
    text-shadow: 2px 2px 2px ${(props) => props.theme.body};
  }
  h2 {
    font-size: ${(props) => props.theme.fontlg};
    color: ${(props) => props.theme.text};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    text-transform: capitalize;
    font-weight: 500;
  }
`;
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
const Banner = () => {
  return (
    <Section>
      <Video />
      <Title>
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay=".13"
          >
            L
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay=".09"
          >
            T
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay=".06"
          >
            B
          </motion.h1>
        </motion.div>
        <motion.h2
          variants={item2}
          initial="hidden"
          animate="show"
          data-scroll
          data-scroll-speed="2"
          data-scroll-delay=".04"
        >
          Inspire. Create. Belive
        </motion.h2>
      </Title>
    </Section>
  );
};

export default Banner;
