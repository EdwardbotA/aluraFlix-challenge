import styled from "styled-components";
import error from "../Modal/cerrar.png";
import success from "./check-circle.svg";

const PopupStyles = styled.div`
  position: fixed;
  align-self: center;
  width: 80%;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--secondary-background-dark-blue);
  color: var(--secondary-white);
  font-size: 3rem;
  border: 6px solid var(--main-color-blue);
  border-radius: 20px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  z-index: 10;

	@media (width > 1024px) {
		width: 700px;
	}
`;

const Popup = ({ message, type }) => {
  const icon = type === "error" ? error : success;
  return (
    <PopupStyles>
      <img src={icon} alt={`icono de ${type}`} style={{ color: "inherit" }} />
      <p style={{ textAlign: "center" }}>{message}</p>
    </PopupStyles>
  );
};

export default Popup;
