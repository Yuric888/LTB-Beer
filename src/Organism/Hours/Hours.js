import styled from "styled-components";
import img from "../../assets/images/beer-hours.png";
import { dataHours } from "../../data/dataHours/dataHours";
import gif from "../../assets/images/gif-beer.webp";
const Hours = () => {
  return (
    <Section>
      <Image>
        <img src={img} alt="Hours" />
      </Image>
      <Container>
        <Content>
          <Left>
            <h2>business hours</h2>
            <Timer>
              <Days>
                {dataHours.map((item, idx) => {
                  return <span key={idx}>{item.day}</span>;
                })}
              </Days>
              <Hour>
                {dataHours.map((item, idx) => {
                  return <span key={idx}>{item.time}</span>;
                })}
              </Hour>
            </Timer>
          </Left>
          <Right>
            <h2>follow us</h2>
            <Social>
              <img
                alt="Facebook"
                src="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico"
              />
              <img
                alt="instagram"
                src="https://static.cdninstagram.com/rsrc.php/v3/yb/r/lswP1OF1o6P.png"
              />
              <Gif alt="gif beer" src={gif} />
            </Social>
          </Right>
        </Content>
      </Container>
    </Section>
  );
};

export default Hours;
const Section = styled.div`
  /* height: 90vh; */
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 80px;
  margin: 10% auto;
`;
const Image = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
  img {
    display: block;
    width: 80%;
    height: auto;
  }
`;
const Container = styled.div`
  width: 60%;
  color: ${(props) => props.theme.body};
  text-align: center;
`;
// const Title = styled.h1`
//   text-transform: uppercase;
//   color: ${(props) => props.theme.textTitle};
//   font-size: ${(props) => props.theme.fontxxl};
// `;
const Content = styled.div`
  margin-top: 2em;
  margin-left: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em 0;
  text-align: left;
  margin-right: 20px;
  h2 {
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.textTitle};
    text-transform: uppercase;
  }
`;
const Timer = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontlg};
  margin-top: 2rem;
`;
const Days = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-transform: capitalize;
  font-weight: 600;
  gap: 20px 0;
`;
const Hour = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px 0;
  font-weight: 500;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.textTitle};
    text-transform: uppercase;
  }
`;

const Social = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  gap: 0 2em;

  position: relative;
  img {
    cursor: pointer;
    width: 3em;
    height: 3em;
  }
`;
const Gif = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;

  width: 15em !important;
  height: 15em !important;
`;
