import styled from "styled-components";
import Banner from "../../components/Banner";
import CourseSection from "../../components/CourseSection";
import { useEffect, useState } from "react";

const HomeContainer = styled.section`
  padding-bottom: 100px;

  @media (width > 1024px) {
    padding-bottom: 0;
  }
`;

const Home = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categorias")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <HomeContainer>
      <Banner />
      {categories.map((category) => (
        <CourseSection key={category.id} category={category} />
      ))}
    </HomeContainer>
  );
};

export default Home;
