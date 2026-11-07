import styles from "./BlogCard.module.css";

export default function BlogCard({ image, category, date, title, avatar, author }) {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.body}>
        <p className={styles.meta}>
          {category} | {date}
        </p>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.author}>
          <img src={avatar} alt="" className={styles.avatar} />
          <span>{author}</span>
        </div>
      </div>
    </article>
  );
}