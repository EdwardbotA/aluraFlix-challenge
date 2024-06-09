import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const LinkStyles = styled(Link)`
  height: 54px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  padding: 8px 16px;
  text-decoration: none;
  border: ${(props) =>
    props.$active ? "3px solid var(--main-color-blue)" : "none"};
  color: ${(props) =>
    props.$active ? "var(--main-color-blue)" : "var(--secondary-white)"};
  background: ${(props) =>
    props.$active ? "var(--button-shadow-color)" : "none"};

  p {
    display: ${(props) => (props.$active ? "block" : "none")};
  }

  @media (width > 1024px) {
    min-width: 180px;
    justify-content: center;
    border: ${(props) =>
      props.$active
        ? "3px solid var(--main-color-blue)"
        : "3px solid var(--secondary-white)"};
    border-radius: 10px;
    background: none;
    box-shadow: ${(props) =>
      props.$active ? "inset 0px 0px 12px 2px rgb(34, 113, 209)" : ""};

    p {
      display: block;
    }
  }
`;

const ImgStyles = styled.img`
  height: ${(props) => (props.$active ? "25px" : "100%")};

  @media (width > 1024px) {
    display: none;
  }
`;

const Button = ({ iconActive, iconInactive, children, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <LinkStyles to={path} $active={isActive}>
      <ImgStyles
        $active={isActive}
        src={isActive ? iconActive : iconInactive}
        alt={`icono de ${children}`}
      />
      <p>{children}</p>
    </LinkStyles>
  );
};

export default Button;
