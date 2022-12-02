import styled from "styled-components";
import Header from "../../Molecules/Header/Header";
const Section = styled.div`
  height: 200vh;
  background-color: ${(props) => props.theme.body};
`;
const Menus = () => {
  return (
    <Section>
      <Header />
    </Section>
  );
};

export default Menus;
