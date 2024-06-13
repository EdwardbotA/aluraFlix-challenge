import styled from "styled-components";
import { LogoStyles } from "../Header";

const FooterStyles = styled.footer`
  position: relative;
  width: 100%;
  height: 125px;
  min-height: 125px;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-background-dark-blue);

  @media (width > 1024px) {
    display: flex;
  }
`;

const ShadowStyles = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 0;
  background-color: var(--main-color-blue);
`;

const Footer = ({ logo }) => {
  return (
    <FooterStyles>
      <ShadowStyles />
      <LogoStyles src={logo} alt="Logo de aluraFlix" />
    </FooterStyles>
  );
};

export default Footer;
