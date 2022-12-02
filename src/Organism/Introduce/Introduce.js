import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  height: 100vh;
`;
const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.body};
  text-shadow: 2px 2px 2px ${(props) => props.theme.grey};

  text-transform: capitalize;
  padding: 20px 0;
  font-weight: 500;
  margin-left: 35%;
`;
const SubTitle = styled(motion.p)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};

  width: 40vw;
  margin: 5px auto;
  text-align: justify;
  font-weight: 400;
`;

const container = {
  hidden: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};
const Introduce = () => {
  return (
    <Section>
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
        variants={container}
        initial="hidden"
        animate="show"
      >
        bia thủ công
      </Title>
      <SubTitle data-scroll data-scroll-speed="2" data-scroll-delay=".04">
        Thuộc dòng Lager, màu vàng rơm, bọt trắng mịn, đọ cồn 4,3ABV.
      </SubTitle>
      <SubTitle data-scroll data-scroll-speed="2" data-scroll-delay=".04">
        Bia được dry hai loại hoa bia hảo hạng tạo nên màu sắc vàng ươm và hương
        thơm đặc trưng và citrussy cộng với vị đắng hài hòa với vị chua nhẹ cùng
        với hậu ngọt mang lại cảm giác dễ uống, khoan khoái cho người dùng.
      </SubTitle>
      <SubTitle data-scroll data-scroll-speed="2" data-scroll-delay=".04">
        Độ cồn/ABV: 4,3%.
      </SubTitle>
    </Section>
  );
};

export default Introduce;
