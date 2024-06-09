import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from './BasePage.module.css'
import Footer from "../../components/Footer";
import logo from './Logo.png'

const BasePage = () => {
  return (
    <main className={styles.container}>
      <Header logo={logo}/>
      <Outlet />
			<Footer logo={logo}/>
    </main>
  );
};

export default BasePage;
