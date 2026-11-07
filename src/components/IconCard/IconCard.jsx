import styles from "./IconCard.module.css";

export default function IconCard({ icon, label, active, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.card} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      <img src={icon} alt="" className={styles.icon} />
      <span className={styles.label}>{label}</span>
    </button>
  );
}