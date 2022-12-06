import { motion } from "framer-motion";
import styled from "styled-components";
const Introduce = () => {
  return (
    <Section>
      <Title>craft beer</Title>
      <SubTitle>
        Thuộc dòng Lager, màu vàng rơm, bọt trắng mịn, đọ cồn 4,3ABV.
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
  width: 100%;
  display: flex;
  flex-direction: column;

  /* background-color: ${(props) => props.theme.grey}; */
`;
const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.body};
  text-shadow: 2px 2px 2px ${(props) => props.theme.grey};

  text-transform: capitalize;
  padding: 20px 0;
  font-weight: 600;
  text-align: center;
  font-style: italic;
`;
const SubTitle = styled(motion.p)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};

  width: 40vw;
  margin: 5px auto;
  text-align: justify;
  font-weight: 400;
`;
