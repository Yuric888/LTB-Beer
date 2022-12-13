import React, { useRef } from "react";
import styled from "styled-components";
import { dataSlider } from "../../data/dataSlider/dataSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OverDarkLayout from "../../Atoms/OverDarkLayout/OverDarkLayout";
const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  button.slick-prev {
    z-index: 10;
    left: 10%;
    color: white;
    &:before {
      font-size: 50px;
      color: white;
      @media (max-width: 600px) {
        font-size: 30px;
      }
    }
  }
  button.slick-next {
    right: 10%;
    z-index: 10;
    &:before {
      font-size: 50px;
      color: white;
      @media (max-width: 600px) {
        font-size: 30px;
      }
    }
  }
`;
const Image = styled.img`
  display: block;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
var settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};
const SlickComponent = () => {
  // const [hidePlay, setHidePlay] = useState(false);
  // const [hidePause, setHidePause] = useState(false);
  const ref = useRef({});
  const DefaultsData = dataSlider;
  // const play = () => {
  //   ref.current.slickPlay();
  //   setHidePause(false);
  //   setHidePlay(true);
  // };
  // const pause = () => {
  //   ref.current.slickPause();
  //   setHidePlay(false);
  //   setHidePause(true);
  // };
  return (
    <Section>
      <OverDarkLayout />
      {/* <ButtonChange>
        {hidePlay === true && hidePause === false ? (
          <ButtonPause width={30} height={30} color="white" click={pause} />
        ) : (
          <ButtonPlay width={30} height={30} color="white" click={play} />
        )}
      </ButtonChange> */}
      <Slider ref={ref} {...settings}>
        {DefaultsData.map((item, idx) => (
          <Image key={idx} alt={item.id} src={item.url} />
        ))}
      </Slider>
    </Section>
  );
};

export default SlickComponent;
