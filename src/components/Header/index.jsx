import Button from "../Button";
import styles from "./Header.module.css";
import homeActivo from "./home-activo.png";
import homeinactivo from "./home-inactivo.png";
import addActivo from "./añadir-activo.png";
import addinactivo from "./añadir-inactivo.png";

const Header = () => {
  const shadowPosition =
    window.innerWidth < 1024 ? { top: "0" } : { bottom: "0" };

  return (
    <header className={styles.container}>
      <div className={styles.shadow} style={shadowPosition}></div>
      <Button
        route="/"
        iconActive={homeActivo}
        iconInactive={homeinactivo}
        active
      >
        Home
      </Button>
      <Button route="/add" iconActive={addActivo} iconInactive={addinactivo}>
        Nuevo video
      </Button>
    </header>
  );
};

export default Header;
