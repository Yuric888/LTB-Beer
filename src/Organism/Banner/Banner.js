import styled from "styled-components";
import video from "../../assets/video-beer.mp4";
const Section = styled.div`
  width: 100vw;
  height: 200vh;

  background-color: ${(props) => props.theme.body};
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Banner = () => {
  return (
    <Section>
      <video src={video} type="video/mp4" autoPlay loop muted />
    </Section>
  );
};

export default Banner;
