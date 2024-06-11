import styled from "styled-components";
import closeBtn from "./cerrar.png";
import FormInput from "../FormInput";
import OptionInput from "../OptionInput";
import ActionBtn from "../ActionBtn";

const Overlay = styled.div`
  background-color: var(--shadow-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
`;

const DialogStyles = styled.dialog`
  position: absolute;
  top: 30px;
  width: 93%;
  z-index: 4;
  margin: 0 auto;
  border-radius: 15px;
  border: 5px solid #6bd1ff;
  padding: 60px 12px;
  background-color: var(--background-modal);
`;

const FormStyles = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const TitleStyles = styled.legend`
  color: var(--main-color-blue);
  font-size: 3.2rem;
  font-weight: bold;
`;

const ButtonClose = styled.button`
  position: absolute;
  top: -44px;
  right: 4px;
  height: 52px;
  width: 52px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const Modal = () => {
  return (
    <>
      <Overlay />
      <DialogStyles open>
        <FormStyles method="dialog">
          <ButtonClose>
            <img src={closeBtn} alt="Cerrar" />
          </ButtonClose>
          <TitleStyles>Editar card:</TitleStyles>

          <FormInput placeholder="Título del video" from="modal">
            Título
          </FormInput>
          <OptionInput placeholder="Escoja una categoría" from="modal">
            Categoria
          </OptionInput>
          <FormInput placeholder="link de la imagen" type="url" from="modal">
            Imagen
          </FormInput>
          <FormInput placeholder="Link del video" type="url" from="modal">
            Video
          </FormInput>
          <FormInput
            big
            placeholder="¿De qué se trata este vídeo?"
            from="modal"
          >
            Descripción
          </FormInput>
          <ButtonContainer>
            <ActionBtn main>Guardar</ActionBtn>
            <ActionBtn>limpiar</ActionBtn>
          </ButtonContainer>
        </FormStyles>
      </DialogStyles>
    </>
  );
};

export default Modal;