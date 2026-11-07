import Layout from "../components/Layout/Layout";
import SearchBar from "../components/Searchbar/SearchBar";
import SearchRestaurant from "../components/SearchRestaurant/SearchRestaurant";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <Layout navWhite>
      <div className={styles.page}>
        <div className={styles.top}>
          <div className={styles.card}>
            <SearchBar />
          </div>
        </div>

        <SearchRestaurant />
      </div>
    </Layout>
  );
}