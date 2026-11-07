import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main className={styles.main} id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}