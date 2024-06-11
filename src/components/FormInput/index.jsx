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

const InputStyles = styled.input`
  font-family: "Source sans Pro", sans-serif;
  border-radius: 10px;
  height: 62px;
  font-size: 2rem;
  font-weight: 300;
  background: none;
  padding: 16px 4px;
  color: var(--secondary-white);
  border: ${(props) =>
    props.$from === "modal"
      ? "3px solid var(--main-color-blue)"
      : "3px solid var(--main-gray)"};
`;

const TextareaStyles = styled.textarea`
  font-family: "Source sans Pro", sans-serif;
  height: 155px;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: 300;
  background: none;
  padding: 16px 4px;
  color: var(--secondary-white);
  border: ${(props) =>
    props.$from === "modal"
      ? "3px solid var(--main-color-blue)"
      : "3px solid var(--main-gray)"};
  resize: none;
  scrollbar-width: thin;
  scrollbar-color: var(--main-color-blue) var(--scrollbar-color);
`;

const FormInput = ({
  children,
  type = "text",
  from,
  placeholder,
  value = "",
  big,
}) => {
  return (
    <LabelStyles>
      {children}
      {big ? (
        <TextareaStyles
          $from={from}
          type={type}
          value={value}
          placeholder={placeholder}
        />
      ) : (
        <InputStyles
          $from={from}
          type={type}
          value={value}
          placeholder={placeholder}
        />
      )}
    </LabelStyles>
  );
};

export default FormInput;
