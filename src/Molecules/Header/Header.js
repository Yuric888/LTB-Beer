import { useState } from "react";
import styled from "styled-components";
import Located from "../../Atoms/Located/Located";
import Logo from "../../Atoms/Logo/Logo";
import Navbar from "../../Atoms/Navbar/Navbar";
const Header = () => {
  const [scroll, setScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <Section>
      <Title>
        <Located />
      </Title>
      <Content scroll={scroll}>
        <Logo />
        <Navbar />
      </Content>
    </Section>
  );
};

export default Header;
const Section = styled.div`
  position: relative;
`;
const Title = styled.div`
  width: 100%;
`;
const Content = styled.div`
  position: ${(props) => (props.scroll ? "fixed" : "absolute")};
  top: ${(props) => (props.scroll ? "0" : "30px")};
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) =>
    props.scroll ? `rgba(${props.theme.bodyRgba}, .8)` : "transparent"};
  height: ${(props) => (props.scroll ? "60px" : "auto")};
  transition: 0.5s;
`;
