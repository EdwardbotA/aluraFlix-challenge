import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [categories, setCategory] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categorias")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <GlobalContext.Provider value={{ categories, videos }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
