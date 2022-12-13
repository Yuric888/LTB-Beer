import Banner from "../../Organism/Banner/Banner";
import styled from "styled-components";
import Header from "../../Molecules/Header/Header";
import Introduce from "../../Organism/Introduce/Introduce";
import { FadeInWhenVisible } from "../../utils/FadeInWhenVisible";
// import Instruction from "../../Organism/Instruction/Instruction";
import VectorBeer from "../../Organism/VectorBeer/VectorBeer";
import Hours from "../../Organism/Hours/Hours";
import Hops from "../../Organism/Hops/Hops";
import Footer from "../../Organism/Footer/Footer";
const Section = styled.div`
  height: auto;
`;
const HomePage = () => {
  return (
    <Section>
      <Header />
      {/* <FadeInWhenVisible> */}
      <Banner />
      {/* </FadeInWhenVisible> */}
      <FadeInWhenVisible>
        <Introduce />
      </FadeInWhenVisible>
      <Hops />
      <FadeInWhenVisible>
        <VectorBeer />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <Instruction />
      </FadeInWhenVisible> */}
      <FadeInWhenVisible>
        <Hours />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
    </Section>
  );
};

export default HomePage;
