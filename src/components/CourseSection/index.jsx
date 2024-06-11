import styled from "styled-components";
import CourseTitle from "../CourseTitle";
import Card from "../Card";
import { GlobalContext } from '../../context/Context'
import { useContext } from "react";

const SectionStyles = styled.section`
  width: 100%;
  background-color: var(--main-background-black);
  padding: 40px 27px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (width > 1024px) {
    align-items: center;
    padding: 62px;
  }
`;

const CourseContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  gap: 30px;
  scrollbar-width: thin;
  scrollbar-color: var(--main-color-blue) var(--scrollbar-color);
  padding-bottom: 12px;

  @media (width > 1024px) {
    align-self: flex-start;
  }
`;

const CourseSection = ({ category }) => {
  const { videos } = useContext(GlobalContext);
  const { color, nombre } = category;

  return (
    <SectionStyles>
      <CourseTitle color={color}>{nombre}</CourseTitle>
      <CourseContainer>
        {videos
          .filter((video) => video.Categoria === nombre)
          .map((video) => (
            <Card color={color} key={video.id} video={video} />
          ))}
      </CourseContainer>
    </SectionStyles>
  );
};

export default CourseSection;
