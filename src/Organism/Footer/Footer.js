/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import img from "../../assets/images/beer-footer.png";
import OverDarkLayout from "../../Atoms/OverDarkLayout/OverDarkLayout";
import logo from "../../assets/images/logo_LTB.jpg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Section style={{ backgroundImage: `url(${img})` }}>
      <OverDarkLayout />
      <Container>
        <Left>
          <About>
            <h2>about us</h2>
            <p>Best craft beer.</p>
            <span>
              Long Thanh Beer is our life, beer is our water so don't waste time
              drinking other things.
            </span>
          </About>
          <Address>
            <Link to="/">
              <img alt="logo" src={logo} />
            </Link>
            <div>
              <p>(+84) 969-786-928 - Dũng</p>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.google.com/maps/place/10%C2%B050'14.9%22N+106%C2%B049'50.4%22E/@10.836882,106.8299115,18z/data=!4m5!3m4!1s0x0:0xefb544ac43d09199!8m2!3d10.8374737!4d106.8306612"
              >
                <span>s102.01S13 Vinhomes grand park</span>
              </a>
            </div>
          </Address>
        </Left>
        <Right>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </Right>
      </Container>
      <Underline></Underline>
    </Section>
  );
};

export default Footer;
const Section = styled.footer`
  width: 100vw;
  height: 80vh;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;
const Container = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 20;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  padding: 0 5em;
  text-align: justify;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 2em 0;
    padding: 2em;
  }
`;
const Left = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 2em;
  @media (max-width: 767px) {
    grid-template-columns: 100%;
    grid-gap: 2em 0;
    width: 100%;
  }
`;
const About = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1em 0;
  h2 {
    text-transform: uppercase;
    text-align: center;
  }
  p {
    text-align: center;
  }
  span {
    margin-top: 2em;
    text-align: left;
  }
  @media (max-width: 767px) {
    width: 100%;
    gap: 1em 0;
    span {
      margin-top: 0;
    }
  }
`;
const Address = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em 0;
  text-transform: capitalize;
  img {
    display: block;
    width: 6em;
    height: auto;
  }
  div {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 1em 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    gap: 0;
  }
`;
const Right = styled.ul`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 2em 0;
  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
    flex-direction: row;
    gap: 0 1em;
  }
`;
const Underline = styled.div`
  position: absolute;
  width: 80%;
  height: 0.5px;
  background-color: ${(props) => props.theme.text};
  bottom: 5em;
  z-index: 20;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 500px) {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
`;
