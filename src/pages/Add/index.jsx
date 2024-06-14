import styled from "styled-components";
import ActionBtn from "../../components/ActionBtn";
import FormInput from "../../components/FormInput";
import { ButtonContainer } from "../../components/Modal";
import OptionInput from "../../components/OptionInput";

const AddContainer = styled.section`
  background-color: var(--main-background-black);
  width: 100%;
  padding: 100px 50px 150px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 60px;

  @media (width > 1024px) {
    justify-content: center;
  }
`;

const MainTitleContainer = styled.div`
  text-align: center;
  color: var(--secondary-white);
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  gap: 10px;

  h1 {
    font-size: 4rem;
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const FormStyles = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 60px;

  @media (width > 1024px) {
    flex-direction: row;
		justify-content: space-between;
  }
`;

const TitleStyles = styled.legend`
  font-size: 3.6rem;
  font-weight: 600;
  color: var(--secondary-white);
  text-transform: capitalize;
  border-top: 3px solid var(--main-gray);
  border-bottom: 3px solid var(--main-gray);
  padding: 12px 0;
  width: 100%;
`;

const Add = () => {
  return (
    <AddContainer>
      <MainTitleContainer>
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </MainTitleContainer>

      <FormStyles>
        <TitleStyles>crear tarjeta</TitleStyles>

        <FormInput
          // inputValue={title}
          placeholder="Título del video"
          name="titulo"
        >
          Título
        </FormInput>
        <OptionInput
          // inputValue={category}
          placeholder="Escoja una categoría"
          name="categoria"
        >
          Categoria
        </OptionInput>
        <FormInput
          // inputValue={image}
          placeholder="link de la imagen"
          type="url"
          name="imagen"
        >
          Imagen
        </FormInput>
        <FormInput
          // inputValue={videoLink}
          placeholder="Link del video"
          type="url"
          name="video"
        >
          Video
        </FormInput>
        <FormInput
          // inputValue={description}
          big
          placeholder="¿De qué se trata este vídeo?"
          name="descripcion"
        >
          Descripción
        </FormInput>

        <ButtonContainer>
          <ActionBtn type="submit" main>
            Guardar
          </ActionBtn>
          <ActionBtn type="button">limpiar</ActionBtn>
        </ButtonContainer>
      </FormStyles>
    </AddContainer>
  );
};

export default Add;
