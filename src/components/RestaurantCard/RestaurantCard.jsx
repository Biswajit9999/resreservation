import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import shop from "../../assests/restaurant.png";
import styles from "./RestaurantCard.module.css";

export default function RestaurantCard({ restaurant, onBook, booking }) {
  const { restaurantName, address, city, state, rating } = restaurant;

  return (
    <article className={styles.card}>
      <img src={shop} alt="" className={styles.logo} />

      <div className={styles.main}>
        <h3 className={styles.name}>{restaurantName}</h3>
        <p className={styles.place}>
          {city}, {state}
        </p>
        <p className={styles.address}>{address}</p>
        <p className={styles.fee}>
          <strong>FREE</strong> <s>₹500</s> Registration fee
        </p>

        <div className={styles.divider} />

        <div className={styles.rating}>
          <ThumbUpIcon className={styles.thumb} />
          <span>{rating}</span>
        </div>
      </div>

      {booking ? (
        <div className={styles.chips}>
          <span className={styles.timeChip}>{booking.time}</span>
          <span className={styles.dateChip}>{booking.date}</span>
        </div>
      ) : (
        <div className={styles.action}>
          <p className={styles.avail}>Available Today</p>
          <button type="button" className={styles.bookBtn} onClick={onBook}>
            Book FREE Reservation
          </button>
        </div>
      )}
    </article>
  );
}
