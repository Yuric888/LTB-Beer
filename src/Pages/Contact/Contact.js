import styled from "styled-components";
import Header from "../../Molecules/Header/Header";
import useLocoScroll from "../../utils/useLocomotive";
const Section = styled.div`
  height: 200vh;
  background-color: ${(props) => props.theme.body};
`;
const Contact = () => {
  useLocoScroll();
  return (
    <Section>
      <Header />
    </Section>
  );
};

export default Contact;
