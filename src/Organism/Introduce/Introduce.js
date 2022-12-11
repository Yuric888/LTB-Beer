import { motion } from "framer-motion";
import styled from "styled-components";
const Introduce = () => {
  return (
    <Section>
      <Title>craft beer</Title>
      <SubTitle>
        Thuộc dòng Lager, màu vàng rơm, bọt trắng mịn, độ cồn 4,3ABV.
      </SubTitle>
      <br />
      <SubTitle>
        Bia được dry hai loại hoa bia hảo hạng tạo nên màu sắc vàng ươm và hương
        thơm đặc trưng và citrussy cộng với vị đắng hài hòa với vị chua nhẹ cùng
        với hậu ngọt mang lại cảm giác dễ uống, khoan khoái cho người dùng.
      </SubTitle>
      <br />
      <SubTitle>Độ cồn/ABV: 4,3%.</SubTitle>
    </Section>
  );
};

export default Introduce;

const Section = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const Title = styled(motion.h1)`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.textTitle};
  text-shadow: 2px 2px 2px ${(props) => props.theme.grey};

  text-transform: capitalize;
  padding: 20px 0;
  font-weight: 600;
  text-align: center;
  font-style: italic;
  @media (max-width: 499px) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (min-width: 500px) and (max-width: 1023px) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;
const SubTitle = styled(motion.p)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};

  width: 40vw;
  margin: 5px auto;
  text-align: justify;
  font-weight: 400;
  @media (max-width: 1023px) {
    width: 100vw;
    padding: 0 0.5em;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
