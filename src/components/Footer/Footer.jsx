import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useState } from "react";
import PinterestIcon from "@mui/icons-material/Pinterest";
import phoneImg from "../../assests/dining-app.png";
import playstore from "../../assests/playstore.png";
import appleLogo from "../../assests/apple-logo.png";
import logo from "../../assests/restaurant-logo.png";
import FooterLink from "./Footerlink"; // match your real file name
import styles from "./Footer.module.css";
import arrow from "../../assests/down-arr.png";

const columns = [
  [
    "About Our Restaurant",
    "Menu",
    "Photo Gallery",
    "Contact Us",
    "Terms of Service",
  ],
  [
    "Reservations",
    "Special Events",
    "Private Dining",
    "Customer Support",
    "Gift Cards",
  ],
  [
    "Our Cuisine",
    "Wine List",
    "Chef's Special",
    "Catering Services",
    "Loyalty Program",
  ],
];

const socials = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Twitter", Icon: TwitterIcon },
  { label: "YouTube", Icon: YouTubeIcon },
  { label: "Pinterest", Icon: PinterestIcon },
];

export default function Footer() {
  const [phone, setPhone] = useState("");

  const handleSms = (e) => {
    e.preventDefault();
    if (phone.trim().length < 10) return;
    setPhone("");
  };
  return (
    <>
      <section className={styles.download}>
        <div className={styles.downloadInner}>
          <img
            src={phoneImg}
            alt="Restaurant app"
            className={styles.phoneImg}
          />

          <div className={styles.dlText}>
            <img src={arrow} alt="" className={styles.arrow} />
            <h2 className={styles.dlTitle}>
              Download the <span>Restaurant Booking</span> App
            </h2>
            <p className={styles.dlLabel}>Get the link to download the app</p>

            <form className={styles.smsForm} onSubmit={handleSms}>
              <div className={styles.phoneField}>
                <span className={styles.prefix}>+91</span>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={styles.phoneInput}
                />
              </div>
              <button type="submit" className={styles.smsBtn}>
                Send SMS
              </button>
            </form>

            <div className={styles.stores}>
              <a href="/" className={styles.storeBtn}>
                <img src={playstore} alt="" /> Google Play
              </a>
              <a href="/" className={styles.storeBtn}>
                <img src={appleLogo} alt="" /> App Store
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <img
              src={logo}
              alt="Restaurant Food & Drinks"
              className={styles.logo}
            />
            <div className={styles.socials}>
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="/"
                  aria-label={label}
                  className={styles.social}
                >
                  <Icon fontSize="small" />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.columns}>
            {columns.map((col, i) => (
              <ul key={i} className={styles.list}>
                {col.map((item) => (
                  <FooterLink key={item} label={item} />
                ))}
              </ul>
            ))}
          </div>
        </div>

        <p className={styles.copy}>
          Copyright ©2025 FineDining.com. All Rights Reserved
        </p>
      </footer>
    </>
  );
}
