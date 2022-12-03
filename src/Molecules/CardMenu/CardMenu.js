import styled from "styled-components";
const Container = styled.div`
  width: 100%;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};
  font-family: ${(props) => props.theme.font};

  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;
const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`;
const ContentTitle = styled.h2`
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontlg};

  text-transform: uppercase;
  font-weight: 600;
  text-align: left;
  margin-bottom: 10px;
`;
const ContentSub = styled.p`
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontmd};

  font-weight: 400;
  text-align: justify;
`;
const CardMenu = () => {
  return (
    <Container>
      <Title>bia truyền thống</Title>
      <MenuItems>
        <ContentTitle>IKE’S BLOODY</ContentTitle>
        <ContentSub>
          McClure’s Bloody Mary mix, Hanks Vodka, topped with fixins & rimmed
          with Tajin
        </ContentSub>
        <ContentTitle>IKE’S BLOODY</ContentTitle>
        <ContentSub>
          McClure’s Bloody Mary mix, Hanks Vodka, topped with fixins & rimmed
          with Tajin
        </ContentSub>
        <ContentTitle>IKE’S BLOODY</ContentTitle>
        <ContentSub>
          McClure’s Bloody Mary mix, Hanks Vodka, topped with fixins & rimmed
          with Tajin
        </ContentSub>
      </MenuItems>
    </Container>
  );
};

export default CardMenu;
