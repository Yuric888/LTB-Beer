import styled from "styled-components";
// import img from "../../assets/images/map.PNG";
import img2 from "../../assets/images/map 2.jpg";
const Maps = () => {
  return (
    <Section>
      <Image alt="map" src={img2} />
    </Section>
  );
};

export default Maps;
const Section = styled.div`
  /* margin-bottom: 3em; */
`;
const Image = styled.img`
  display: block;
  width: 100vw;
  height: auto;
`;
