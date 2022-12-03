import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Atoms/Button/Button";

const Section = styled.div`
  width: 100vw;
  margin: 50px auto;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 30px;
  }
`;
const NavMenu = () => {
  return (
    <Section>
      <ul>
        <li>
          <NavLink to="">
            <Button title="beer" />
          </NavLink>
        </li>
        <li>
          <NavLink to="dinner">
            <Button title="dinner" />
          </NavLink>
        </li>
      </ul>
    </Section>
  );
};

export default NavMenu;
