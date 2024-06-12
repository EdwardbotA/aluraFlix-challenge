import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [videoLink, setVideo] = useState("");
  const [description, setDescription] = useState("");

  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/categorias")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  const deleteVideo = (id) => {
    const newVideos = videos.filter((video) => video.id !== id);

    setVideos(newVideos);
  };

  const handleInputChange = (name, value) => {
    switch (name) {
      case "titulo":
        setTitle(value);
        break;
      case "categoria":
        setCategory(value);
        break;
      case "imagen":
        setImage(value);
        break;
      case "video":
        setVideo(value);
        break;
      case "descripcion":
        setDescription(value);
        break;

      default:
        break;
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        title,
        image,
        category,
        videoLink,
        description,
        videos,
        categories,
        selectedVideo,
        handleInputChange,
        setSelectedVideo,
        setCategory,
        deleteVideo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
