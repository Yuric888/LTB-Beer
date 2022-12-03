import styled from "styled-components";
import CardMenu from "../../Molecules/CardMenu/CardMenu";

const Section = styled.div`
  margin: 0 auto 50px;
  width: 1050px;
  padding: 20px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px 40px;
`;
const MenuBeer = () => {
  return (
    <Section>
      <CardMenu />
      <CardMenu />
      <CardMenu />
      <CardMenu />
      <CardMenu />
      <CardMenu />
      <CardMenu />
      <CardMenu />
      <CardMenu />
      <CardMenu />
      <CardMenu />
    </Section>
  );
};

export default MenuBeer;
