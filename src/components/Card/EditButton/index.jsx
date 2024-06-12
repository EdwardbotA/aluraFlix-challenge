import styled from "styled-components";

const ButtonStyles = styled.button`
  height: 28px;
  display: flex;
  gap: 20px;
  background: none;
  border: none;
  align-items: center;
  cursor: pointer;
`;

const TextStyles = styled.span`
  color: var(--secondary-white);
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const EditButton = ({ img, children, video, action }) => {
  return (
    <ButtonStyles
      onClick={() => (children === "Borrar" ? action(video.id) : action(video))}
    >
      <img src={img} alt={`icono de ${children}`} />
      <TextStyles>{children}</TextStyles>
    </ButtonStyles>
  );
};

export default EditButton;
