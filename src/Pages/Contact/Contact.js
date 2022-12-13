import styled from "styled-components";
import Header from "../../Molecules/Header/Header";
import img from "../../assets/images/beer-contact.png";
import OverDarkLayout from "../../Atoms/OverDarkLayout/OverDarkLayout";
import Hours from "../../Organism/Hours/Hours";
import { FadeInWhenVisible } from "../../utils/FadeInWhenVisible";
import Maps from "../../Organism/Maps/Maps";
import Footer from "../../Organism/Footer/Footer";
const Section = styled.div`
  /* height: 100vh; */
`;
const Contact = () => {
  return (
    <Section>
      <Header />
      <OverDarkLayout />
      <FadeInWhenVisible>
        <Image src={img} alt="beer-contact"></Image>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Hours />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Maps />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
    </Section>
  );
};

export default Contact;
const Image = styled.img`
  display: block;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center bottom;
`;
