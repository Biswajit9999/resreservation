import {
  addDays,
  format,
  isSameDay,
  isToday,
  isTomorrow,
  startOfDay,
} from "date-fns";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./DaySelector.module.css";

export default function DaySelector({ selected, onChange }) {
  const today = startOfDay(new Date());
  const last = addDays(today, 7); // inclusive

  const atStart = isSameDay(selected, today);
  const atEnd = isSameDay(selected, last);

  const label = isToday(selected)
    ? "Today"
    : isTomorrow(selected)
    ? "Tomorrow"
    : format(selected, "EEE, d MMM");

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.arrow}
        aria-label="Previous day"
        disabled={atStart}
        onClick={() => onChange(addDays(selected, -1))}
      >
        <ChevronLeftIcon />
      </button>

      <div className={styles.day}>
        <p className={styles.label}>{label}</p>
        <p className={styles.date}>{format(selected, "d MMMM yyyy")}</p>
      </div>

      <button
        type="button"
        className={styles.arrow}
        aria-label="Next day"
        disabled={atEnd}
        onClick={() => onChange(addDays(selected, 1))}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}