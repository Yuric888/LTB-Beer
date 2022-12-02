import Banner from "../../Organism/Banner/Banner";
import styled from "styled-components";
import Header from "../../Molecules/Header/Header";
import Introduce from "../../Organism/Introduce/Introduce";
const Section = styled.div`
  height: auto;
`;
const HomePage = () => {
  return (
    <Section>
      <Header />
      <Banner />
      <Introduce />
    </Section>
  );
};

export default HomePage;
