import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./Footer.module.css";

export default function FooterLink({ label, href = "/" }) {
  return (
    <li>
      <a href={href} className={styles.link}>
        <ChevronRightIcon className={styles.chevron} />
        {label}
      </a>
    </li>
  );
}