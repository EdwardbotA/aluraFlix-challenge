import styled from "styled-components";

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

const OptionInput = ({ children, from, placeholder }) => {
  return (
    <LabelStyles>
      {children}
      <InputStyles $from={from} value="">
        <option value="" disabled defaultValue="" hidden>
          {placeholder}
        </option>
        <option value="">front end</option>
        <option value="">back end</option>
      </InputStyles>
    </LabelStyles>
  );
};

export default OptionInput;
