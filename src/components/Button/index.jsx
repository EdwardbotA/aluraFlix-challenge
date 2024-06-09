import { Link } from "react-router-dom";
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
  color: ${(props) => (props.$active ? "var(--main-color-blue)" : "")};
  background: ${(props) =>
    props.$active ? "var(--button-shadow-color)" : "none"};
`;

const ImgStyles = styled.img`
  height: ${(props) => (props.$active ? "25px" : "100%")};
`;

const Button = ({
  iconActive,
  iconInactive,
  active = false,
  children,
  route,
}) => {
  return (
    <LinkStyles to={route} $active={active}>
      <ImgStyles
        $active={active}
        src={active ? iconActive : iconInactive}
        alt={`icono de ${children}`}
      />
      {active && children}
    </LinkStyles>
  );
};

export default Button;
