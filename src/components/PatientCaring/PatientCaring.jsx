import logo from "../../assests/restaurant-logo.png";
import tick from "../../assests/tick-blue.png";
import styles from "./PatientCaring.module.css";

const features = [
  "Easy Online Booking",
  "Special Occasion Planning",
  "Instant Confirmation",
];

export default function PatientCaring() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <img src={logo} alt="Restaurant Food & Drinks" className={styles.logo} />

        <div className={styles.text}>
          <p className={styles.eyebrow}>Experience fine dining at its best</p>
          <h2 className={styles.title}>
            Table <span>Reservation</span>
          </h2>
          <p className={styles.desc}>
            We make dining memorable with our seamless reservation system. Book
            your perfect table and enjoy an exceptional culinary experience with
            impeccable service.
          </p>

          <ul className={styles.list}>
            {features.map((item) => (
              <li key={item} className={styles.item}>
                <img src={tick} alt="" className={styles.tick} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}