import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/images/food-beer-hp.png";
import { FadeInWhenVisible } from "../../utils/FadeInWhenVisible";

const VectorBeer = () => {
  return (
    <Container>
      <Left>
        <FadeInWhenVisible>
          <Content>
            <Name>the beer vector</Name>
            <SubName>Enjoy our selection of handcrafted brews !</SubName>
            <ButtonView to="/menus">
              <span>view menu</span>
            </ButtonView>
          </Content>
        </FadeInWhenVisible>
      </Left>
      <Right>
        <img alt="" src={img} />
      </Right>
    </Container>
  );
};

export default VectorBeer;
const Container = styled.div`
  width: 100vw;
  height: 70vh;
  background: url("https://images.getbento.com/accounts/003525f50c0c2cca51a388b83adc3823/media/images/37932Ike_Oak_pattern.png?w=1800&fit=max&auto=compress,format&h=1800");
  width: 100%;
  background-size: 600px;
  background-position: top;
  overflow: visible;
  margin-top: 8%;
  margin-bottom: 8%;
  position: relative;
`;
const Left = styled.div`
  width: 50%;
  height: 90%;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: absolute;
  bottom: -10%;
  left: 10%;
  z-index: 1;

  padding-left: 50px;
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px 0;
`;
const Right = styled.div`
  width: 50%;
  height: 90%;
  background: ${(props) => props.theme.body};

  position: absolute;
  right: 10%;
  top: -10%;
  z-index: 2;

  padding: 5px;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
const Name = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props) => props.theme.textTitle};
`;
const SubName = styled.p`
  font-size: ${(props) => props.theme.fontmd};
`;
const ButtonView = styled(Link)`
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  max-width: 8em;

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-weight: 700;
  padding: 10px;
  margin-left: 30px;
`;
