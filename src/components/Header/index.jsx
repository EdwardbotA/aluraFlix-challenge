import homeActivo from "./home-activo.png";
import homeinactivo from "./home-inactivo.png";
import addActivo from "./añadir-activo.png";
import addinactivo from "./añadir-inactivo.png";
import Button from "../Button";
import styled from "styled-components";

const HeaderStyles = styled.header`
  width: 100%;
  height: 100px;
  min-height: 100px;
  background-color: var(--secondary-background-dark-blue);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (width > 1024px) {
    position: relative;
    justify-content: space-between;
    height: 125px;
    min-height: 125px;
    padding: 0 20px;
  }
`;

const ShadowStyles = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--main-color-blue);

  @media (width > 1024px) {
    bottom: 0;
    top: auto;
  }
`;

export const LogoStyles = styled.img`
  display: none;

  @media (width > 1024px) {
    display: block;
    height: 40px;
    width: auto;
  }
`;

const ButtonContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (width > 1024px) {
    width: auto;
    gap: 25px;
  }
`;

const Header = ({ logo }) => {
  return (
    <HeaderStyles>
      <ShadowStyles />
      <LogoStyles src={logo} alt="Logo de aluraFlix" />
      <ButtonContainer>
        <Button path="/" iconActive={homeActivo} iconInactive={homeinactivo}>
          Home
        </Button>
        <Button path="/add" iconActive={addActivo} iconInactive={addinactivo}>
          Nuevo video
        </Button>
      </ButtonContainer>
    </HeaderStyles>
  );
};

export default Header;
