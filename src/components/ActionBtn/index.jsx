import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/Context";

const ButtonStyles = styled.button`
  width: 180px;
  font-size: 2rem;
  text-transform: uppercase;
  border-radius: 10px;
  height: 54px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) =>
    props.$main ? "var(--secondary-background-dark-blue)" : "transparent"};
  border: ${(props) =>
    props.$main
      ? "2px solid var(--main-color-blue)"
      : "2px solid var(--secondary-white)"};
  color: ${(props) =>
    props.$main ? "var(--main-color-blue)" : "var(--secondary-white)"};
  box-shadow: ${(props) =>
    props.$main ? "inset 0px 0px 12px 2px rgb(34, 113, 209)" : ""};

  &:disabled {
    border: 2px solid var(--main-gray);
    box-shadow: inset 0px 0px 12px 2px var(--main-gray);
    color: var(--secondary-white);
    cursor: not-allowed;
  }
`;

const ActionBtn = ({ children, main, type, action }) => {
  const { isFormValid } = useContext(GlobalContext);

  return (
    <>
      {action ? (
        <ButtonStyles onClick={() => action()} type={type} $main={main}>
          {children}
        </ButtonStyles>
      ) : (
        <ButtonStyles disabled={!isFormValid} type={type} $main={main}>
          {children}
        </ButtonStyles>
      )}
    </>
  );
};

export default ActionBtn;
