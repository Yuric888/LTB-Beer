import styled from "styled-components";
import Located from "../../Atoms/Located/Located";
import Logo from "../../Atoms/Logo/Logo";
import Navbar from "../../Atoms/Navbar/Navbar";
const Header = () => {
  return (
    <Section>
      <Logo />
      <Located />
      <Navbar />
    </Section>
  );
};

export default Header;
const Section = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.3)`};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
