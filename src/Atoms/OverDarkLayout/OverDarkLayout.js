import styled from "styled-components";

const DarkOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},.5)`};
`;
const OverDarkLayout = () => {
  return <DarkOverlay></DarkOverlay>;
};

export default OverDarkLayout;
