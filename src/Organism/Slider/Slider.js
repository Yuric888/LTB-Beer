import React from "react";
import styled from "styled-components";
const Section = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},.4)`};
`;
const Slider = () => {
  return <Section>Yuric</Section>;
};

export default Slider;
