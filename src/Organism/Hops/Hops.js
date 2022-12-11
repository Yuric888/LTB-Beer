import styled from "styled-components";
import img1 from "../../assets/images/hops.png";
import img2 from "../../assets/images/beer-hops-2.jpg";
import img3 from "../../assets/images/beer-hops-men.png";
import img4 from "../../assets/images/beer-hops-3.jpg";
import img5 from "../../assets/images/beer-hops-4.jpg";
import img6 from "../../assets/images/beer-hops-barley.png";
import { FadeInWhenVisible } from "../../utils/FadeInWhenVisible";
const Hops = () => {
  return (
    <Section>
      <FadeInWhenVisible>
        <Content1>
          <img src={img1} alt="Hops" />
          <Title>Hoa bia</Title>
          <SubTitle>
            Được nhập khẩu từ Hà Lan cho hương vị chính thống nhất.
          </SubTitle>
        </Content1>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Content2>
          <img src={img2} alt="Hops" />
        </Content2>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Content1>
          <img src={img3} alt="Hops" />
          <Title>men bia</Title>
          <SubTitle>
            Lấy các giá trị men cao cấp cho hiệu suất tốt nhất.
          </SubTitle>
        </Content1>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Content2>
          <img src={img4} alt="Hops" />
        </Content2>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Content1>
          <img src={img6} alt="Hops" />
          <Title>lúa mạch</Title>
          <SubTitle>
            Được nhập khẩu từ Châu Âu giúp giữ được hương vị thuần túy nhất.
          </SubTitle>
        </Content1>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Content2>
          <img src={img5} alt="Hops" />
        </Content2>
      </FadeInWhenVisible>
    </Section>
  );
};

export default Hops;
const Section = styled.div`
  width: 100vw;
  padding: 0 5%;
  min-height: 100vh;
  margin: 10% 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    gap: 2em 0 !important;
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2em 0;
  }
  @media (min-width: 1440px) {
    padding: 0 80px;
  }
`;
const Content1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;
const Title = styled.h2`
  margin: 10% auto 5%;
  color: ${(props) => props.theme.textTitle};
  text-transform: capitalize;
`;
const SubTitle = styled.p`
  color: ${(props) => props.theme.body};

  width: 50%;
  text-align: center;
  font-weight: 500;
  line-height: ${(props) => props.theme.fontxl};
`;

const Content2 = styled.span`
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    max-width: 100%;
    height: auto;
    line-height: 0;
    display: block;
    margin: 0;
  }
`;
