import styled from "styled-components";
import CardMenu from "../../Molecules/CardMenu/CardMenu";

const Section = styled.div`
  margin: 0 auto 50px;
  width: 1050px;
  padding: 0 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px 40px;
  @media (max-width: 767px) {
    grid-template-columns: 100%;
    gap: 3em 0;
    /* padding: 1em; */
  }
  @media (max-width: 1050px) {
    width: 100vw;
  }
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
