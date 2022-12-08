import styled from "styled-components";
import Header from "../../Molecules/Header/Header";
import img from "../../assets/images/beer-contact.png";
import OverDarkLayout from "../../Atoms/OverDarkLayout/OverDarkLayout";
const Section = styled.div`
  /* height: 100vh; */
`;
const Contact = () => {
  return (
    <Section>
      <Header />
      <OverDarkLayout />
      <Image src={img} alt="beer-contact"></Image>
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
