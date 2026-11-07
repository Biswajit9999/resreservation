import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "./Accordion.module.css";

export default function Accordion({ question, answer, isOpen, onToggle }) {
  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.question}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{question}</span>
        {isOpen ? (
          <RemoveIcon className={styles.icon} />
        ) : (
          <AddIcon className={styles.icon} />
        )}
      </button>

      <div className={`${styles.answerWrap} ${isOpen ? styles.show : ""}`}>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
}