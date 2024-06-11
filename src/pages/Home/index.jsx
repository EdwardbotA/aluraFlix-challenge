import styled from "styled-components";
import Banner from "../../components/Banner";
import CourseSection from "../../components/CourseSection";
import Modal from "../../components/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";

const HomeContainer = styled.section`
  position: relative;
  padding-bottom: 100px;

  @media (width > 1024px) {
    padding-bottom: 0;
  }
`;

const Home = () => {
  const { categories } = useContext(GlobalContext);
	
  return (
    <HomeContainer>
      <Banner />
      {categories.map((category) => (
        <CourseSection key={category.id} category={category} />
      ))}
      <Modal />
    </HomeContainer>
  );
};

export default Home;
