import teamImg from "../../assests/restaurant-team.png";
import styles from "./OurFamilies.module.css";

export default function OurFamilies() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>Reserve your dining experience</p>
          <h2 className={styles.title}>Table Booking</h2>
          <p className={styles.desc}>
            Discover the perfect dining experience at our restaurant. From
            intimate dinners to special celebrations, we offer seamless
            reservations that ensure your dining experience is exactly as you
            envision. Our attentive staff is ready to accommodate your
            preferences and dietary requirements.
          </p>
        </div>

        <img src={teamImg} alt="Restaurant team" className={styles.image} />
      </div>
    </section>
  );
}