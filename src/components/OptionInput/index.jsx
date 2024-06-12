import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/Context";

const LabelStyles = styled.label`
  width: 100%;
  color: var(--secondary-white);
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 2rem;
  font-weight: bold;
`;

const InputStyles = styled.select`
  border-radius: 10px;
  height: 62px;
  font-size: 2rem;
  font-weight: 300;
  background-color: var(--background-modal);
  padding: 16px 4px;
  color: var(--secondary-white);
  border: ${(props) =>
    props.$from === "modal"
      ? "3px solid var(--main-color-blue)"
      : "3px solid var(--main-gray)"};
`;

const OptionInput = ({ children, from, placeholder, inputValue, name }) => {
  const { categories, handleInputChange } = useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
  };

  return (
    <LabelStyles>
      {children}
      <InputStyles
        $from={from}
        value={inputValue}
        name={name}
        onChange={handleChange}
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
    </LabelStyles>
  );
};

export default OptionInput;
