import Banner from "../../Organism/Banner/Banner";
import styled from "styled-components";
import Header from "../../Molecules/Header/Header";
import Introduce from "../../Organism/Introduce/Introduce";
import { FadeInWhenVisible } from "../../utils/FadeInWhenVisible";
import Instruction from "../../Organism/Instruction/Instruction";
import VectorBeer from "../../Organism/VectorBeer/VectorBeer";
import Hours from "../../Organism/Hours/Hours";
const Section = styled.div`
  height: auto;
`;
const HomePage = () => {
  return (
    <Section>
      <Header />
      <FadeInWhenVisible>
        <Banner />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Introduce />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <VectorBeer />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Instruction />
      </FadeInWhenVisible>
      <Hours />
    </Section>
  );
};

export default HomePage;
