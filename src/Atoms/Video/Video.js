import styled from "styled-components";
import video from "../../assets/video-beer.mp4";
const Section = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const DarkOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},.4)`};
`;
const Video = () => {
  return (
    <Section>
      <DarkOverlay />
      <video src={video} type="video/mp4" autoPlay loop muted />
    </Section>
  );
};

export default Video;
