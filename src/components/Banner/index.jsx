import styled from "styled-components";
import CourseTitle from "../CourseTitle";

const BannerStyles = styled.section`
  width: 100%;
  height: auto;
  background-color: #6bd1ff;
  background-image: url("https://raw.githubusercontent.com/Diegodelias/challenge-one-aluraflix-latam/main/aluraflix/src/assets/Slider/slider1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  mix-blend-mode: multiply;
  box-shadow: inset 0px 0px 333px 75px #0b223f;
  display: flex;
  flex-direction: column;
  align-items: center;
	justify-content: center;
  padding-top: 40px;
  gap: 20px;

  @media (width > 1024px) {
    flex-direction: row-reverse;
    padding: 210px 28px;
    gap: 36px;
		align-items: flex-end;
  }
`;

const ImgContainerStyles = styled.figure`
  position: relative;
  border-radius: 15px;
  width: 70%;
  overflow: hidden;

  @media (width > 1024px) {
    width: 459px;
    min-width: 459px;
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0px 0px 10px 8px #6bd1ff;
`;

const CourseImgStyles = styled.img`
  width: 100%;
`;

const DescriptionContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: var(--secondary-white);
  padding-bottom: 40px;

  @media (width > 1024px) {
    width: auto;
    gap: 67px;
    align-items: start;
    padding-bottom: 0;
  }
`;

const DescriptionTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;

  @media (width > 1024px) {
    font-size: 3.2rem;
  }
`;

const DescriptionStyles = styled.p`
  font-size: 1.8rem;
  font-weight: 100;
`;

const Banner = () => {
  return (
    <BannerStyles>
      <ImgContainerStyles>
        <CourseImgStyles
          src="https://raw.githubusercontent.com/Diegodelias/challenge-one-aluraflix-latam/main/aluraflix/src/assets/thumbnails/bannerCard.png"
          alt=""
        />
        <Shadow />
      </ImgContainerStyles>
      <DescriptionContainer>
        <CourseTitle color="#6bd1ff">Front end</CourseTitle>
        <div>
          <DescriptionTitle>Challenge React</DescriptionTitle>
          <DescriptionStyles>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </DescriptionStyles>
        </div>
      </DescriptionContainer>
    </BannerStyles>
  );
};

export default Banner;
