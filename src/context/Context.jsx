import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

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
    fetch(`http://localhost:3000/videos/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al eliminar el video");
        }

        return res.json();
      })
      .then(() => {
        const newVideos = videos.filter((video) => video.id !== id);

        setVideos(newVideos);

        alert("video eliminado con éxito");
      })
      .catch((err) => {
        console.error("Error: ", err);
        alert("Hubo un problema al eliminar el video");
      });
  };

  const updateVideoInfo = (data) => {
    const { title, category, image, videoLink, description, id } = data;

    const updatedVideo = {
      titulo: title,
      Categoria: category,
      linkImagenVideo: image,
      linkVideo: videoLink,
      descripcion: description,
    };

    fetch(`http://localhost:3000/videos/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedVideo),
    })
      .then((result) => result.json())
      .then((updatedVideoFromServer) => {
        const newInfo = videos.map((video) => {
          if (video.id === id) {
            return updatedVideoFromServer;
          }

          return video;
        });

        setVideos(newInfo);
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  };

  const createNewVideo = (data) => {
    let newId = 1;

    while (videos.some((video) => newId === video.id)) {
      newId++;
    }

    const infoToSend = {
      Categoria: data.category,
      descripcion: data.description,
      linkVideo: data.videoLink,
      linkImagenVideo: data.image,
      titulo: data.title,
      id: newId,
    };

    fetch(`http://localhost:3000/videos`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(infoToSend),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al crear el video");
        }

        return res.json();
      })
      .then((newVideo) => {
        setVideos([...videos, newVideo]);
        alert(`Se ha agregado con exito el video: ${newVideo.titulo}`);
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Hubo un problema al agregar el video");
      });
  };

  const clearInputs = () => {
    setTitle("");
    setCategory("");
    setImage("");
    setVideo("");
    setDescription("");
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
        updateVideoInfo,
        createNewVideo,
        clearInputs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
