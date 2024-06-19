import styled from "styled-components";
import ActionBtn from "../../components/ActionBtn";
import FormInput from "../../components/FormInput";
import { ButtonContainer } from "../../components/Modal";
import OptionInput from "../../components/OptionInput";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/Context";
import Popup from "../../components/Popup";

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
    justify-content: space-evenly;
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
  const {
    title,
    image,
    category,
    videoLink,
    description,
    handleInputChange,
    createNewVideo,
    clearInputs,
    popup,
		setErrorMessages,
  } = useContext(GlobalContext);

  useEffect(() => {
    handleInputChange("titulo", "");
    handleInputChange("categoria", "");
    handleInputChange("imagen", "");
    handleInputChange("video", "");
    handleInputChange("descripcion", "");
		setErrorMessages({})
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewVideo({ title, image, category, videoLink, description });
    clearInputs();
  };

  return (
    <AddContainer>
      <MainTitleContainer>
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </MainTitleContainer>

      <FormStyles onSubmit={handleSubmit}>
        <TitleStyles>crear tarjeta</TitleStyles>

        <FormInput
          inputValue={title}
          placeholder="Título del video"
          name="titulo"
          minlength="3"
          title="tienes que tener al menos 3 caracteres para ser valido"
        >
          Título
        </FormInput>
        <OptionInput
          inputValue={category}
          placeholder="Escoja una categoría"
          name="categoria"
        >
          Categoria
        </OptionInput>
        <FormInput
          inputValue={image}
          placeholder="link de la imagen"
          type="url"
          name="imagen"
          pattern="^https:\/\/i\.ytimg\.com\/vi\/.*$"
					title="Por favor coloca una Url de youtube"
        >
          Imagen
        </FormInput>
        <FormInput
          inputValue={videoLink}
          placeholder="Link del video"
          type="url"
          name="video"
          pattern="^https:\/\/www\.youtube\.com\/watch\?v=.*$"
          title="Por favor coloca una Url de youtube"
        >
          Video
        </FormInput>
        <FormInput
          inputValue={description}
          big
          placeholder="¿De qué se trata este vídeo?"
          name="descripcion"
          minlength="3"
          maxlength="6000"
        >
          Descripción
        </FormInput>

        <ButtonContainer>
          <ActionBtn type="submit" main>
            Guardar
          </ActionBtn>
          <ActionBtn action={clearInputs} type="button">
            limpiar
          </ActionBtn>
        </ButtonContainer>
      </FormStyles>
      {popup.show && <Popup message={popup.message} type={popup.type} />}
    </AddContainer>
  );
};

export default Add;
