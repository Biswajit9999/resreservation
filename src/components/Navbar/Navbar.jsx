import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/restaurant-logo.png";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


const links = [
  "Find Restaurants",
  "Locations",
  "Reservations",
  "Special Menus",
  "Restaurant Management Software",
  "Services",
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.announce}>
        Stay updated with the latest restaurants and maximize your dining
        experience with our platform.
      </div>

      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          {/* Placeholder: replace with your exported logo image later */}
          <img src={logo} alt="Restaurant Food & Drinks" className={styles.logoImg} />
        </Link>

        <button
          type="button"
          className={styles.hamburger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <ul className={`${styles.links} ${open ? styles.open : ""}`}>
          {links.map((item) => (
            <li key={item}>
              <a href="/" className={styles.link}>
                {item}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/my-bookings"
              className={styles.btn}
              onClick={() => setOpen(false)}
            >
              My Bookings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}