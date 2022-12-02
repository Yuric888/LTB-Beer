import styled from "styled-components";
import Header from "../../Molecules/Header/Header";
const Section = styled.div`
  height: 200vh;
  background-color: ${(props) => props.theme.body};
`;
const Contact = () => {
  return (
    <Section>
      <Header />
    </Section>
  );
};

export default Contact;
