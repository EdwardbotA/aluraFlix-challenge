import { useContext } from "react";
import styled, { css } from "styled-components";
import { GlobalContext } from "../../context/Context";

const LabelStyles = styled.label`
  width: 100%;
  color: var(--secondary-white);
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 2rem;
  font-weight: bold;

  @media (min-width: 1024px) {
    width: ${(props) => (props.$from === "modal" ? "100%" : "47%")};
  }
`;

const InputStyles = styled.select`
  font-family: "Source sans Pro", sans-serif;
  border-radius: 10px;
  height: 62px;
  font-size: 2rem;
  font-weight: 300;
  background-color: ${(props) =>
    props.$from === "modal"
      ? "var(--background-modal)"
      : "var(--main-background-black)"};
  padding: 16px 4px;
  color: var(--secondary-white);
  border: ${(props) =>
    props.$from === "modal"
      ? "3px solid var(--main-color-blue)"
      : "3px solid var(--main-gray)"};

  ${(props) => {
    if (props.$error) {
      return css`
        &:invalid {
          border: 3px solid var(--error-color);
        }
      `;
    }
  }}
`;

const ErrorStyles = styled.span`
  font-size: 1.5rem;
  text-align: center;
`;

const OptionInput = ({
  children,
  from = "",
  placeholder,
  inputValue = "",
  name,
}) => {
  const { categories, handleInputChange, errorMessages, verifyField } =
    useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
    verifyField(e.target);
  };

  return (
    <LabelStyles $from={from}>
      {children}
      <InputStyles
        $error={errorMessages[name]}
        $from={from}
        value={inputValue}
        name={name}
        onChange={handleChange}
        required
      >
        <option value="" disabled defaultValue="" hidden>
          {placeholder}
        </option>
        {categories.map((category) => (
          <option value={category.nombre} key={category.id}>
            {category.nombre}
          </option>
        ))}
      </InputStyles>
      {errorMessages[name] && <ErrorStyles>{errorMessages[name]}</ErrorStyles>}
    </LabelStyles>
  );
};

export default OptionInput;
