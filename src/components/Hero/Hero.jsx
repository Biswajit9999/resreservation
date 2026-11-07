import chef from "../../assests/chef.png";
import SearchBar from "../Searchbar/SearchBar";
import HeroServices from "../HeroServices/HeroServices";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.top}>
        <div className={styles.text}>
          <p className={styles.kicker}>Skip the wait! Reserve Online</p>
          <h1 className={styles.title}>
            Table <span>Reservation</span>
          </h1>
          <p className={styles.desc}>
            Connect instantly with our platform to reserve tables at your
            favorite restaurants.
          </p>
          <a href="#search-card" className={styles.cta}>
            Find Restaurants
          </a>
        </div>

        <div className={styles.imageWrap}>
          <img src={chef} alt="Chef" className={styles.chef} />
        </div>
      </div>

      <div className={styles.cardWrap}>
        <div id="search-card" className={styles.card}>
          <SearchBar />
          <HeroServices />
        </div>
      </div>
    </section>
  );
}