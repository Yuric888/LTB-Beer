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
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.google.com/maps/place/10%C2%B050'14.9%22N+106%C2%B049'50.4%22E/@10.836882,106.8299115,18z/data=!4m5!3m4!1s0x0:0xefb544ac43d09199!8m2!3d10.8374737!4d106.8306612"
      >
        <motion.p
          variants={address}
          initial="hidden"
          animate="show"
          whileHover={{ color: "#bebebe" }}
        >
          s102.01S13 Vinhomes grand park
        </motion.p>
      </a>
      <motion.p variants={phone} initial="hidden" animate="show">
        (+84) 969786928
      </motion.p>
    </Section>
  );
};

export default Located;

const Section = styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;

  padding: 6px;
  background-color: transparent;
  p {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.text};

    text-transform: capitalize;
  }
  @media (max-width: 980px) {
    display: none;
    opacity: 0;
  }
`;
