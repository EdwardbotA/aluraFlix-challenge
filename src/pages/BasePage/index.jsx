import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from './BasePage.module.css'

const BasePage = () => {
  return (
    <main className={styles.container}>
      <Header />
      <Outlet />
    </main>
  );
};

export default BasePage;
