import styled from "styled-components";
import video from "../../assets/video-beer.mp4";
import OverDarkLayout from "../OverDarkLayout/OverDarkLayout";
const Section = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

const Video = () => {
  return (
    <Section>
      <OverDarkLayout />
      <video src={video} type="video/mp4" autoPlay loop muted />
    </Section>
  );
};

export default Video;
