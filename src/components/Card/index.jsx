import styled from "styled-components";
import EditButton from "./EditButton";
import deleteIcon from "./borrar.png";
import editIcon from "./editar.png";

const CardContainer = styled.article`
  width: 374px;
  min-width: 374px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  z-index: 1;
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: ${(props) => `inset 0px 0px 10px 4px ${props.$color}`};
  pointer-events: none;
`;

const ImageStyles = styled.img`
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Card = ({ color }) => {
  return (
    <CardContainer>
      <ImageStyles
        src="https://raw.githubusercontent.com/Diegodelias/challenge-one-aluraflix-latam/main/aluraflix/src/assets/thumbnails/bannerCard.png"
        alt=""
      />
      <ButtonContainer>
        <EditButton img={deleteIcon}>Borrar</EditButton>
        <EditButton img={editIcon}>Editar</EditButton>
      </ButtonContainer>
      <Shadow $color={color} />
    </CardContainer>
  );
};

export default Card;
