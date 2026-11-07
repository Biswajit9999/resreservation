import { useEffect, useState } from "react";
import { format, parseISO, isValid } from "date-fns";
import SearchIcon from "@mui/icons-material/Search";
import Layout from "../components/Layout/Layout";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import poster from "../assests/restoffer1.png";
import styles from "./MyBookings.module.css";

// "2025-03-04" -> "04 March 2025"
const formatDate = (value) => {
  const d = parseISO(value);
  return isValid(d) ? format(d, "dd MMMM yyyy") : value;
};

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("bookings"));
      setBookings(Array.isArray(saved) ? saved : []);
    } catch {
      setBookings([]);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(text.trim().toLowerCase());
  };

  const handleChange = (e) => {
    setText(e.target.value);
    if (e.target.value === "") setQuery(""); // clearing the box shows everything
  };

  const visible = bookings.filter((b) =>
    b.restaurantName.toLowerCase().includes(query)
  );

  return (
    <Layout navWhite>
      <div className={styles.page}>
        <div className={styles.top}>
          <div className={styles.topInner}>
            <h1 className={styles.title}>My Bookings</h1>

            <form className={styles.searchCard} onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search By Restaurant"
                value={text}
                onChange={handleChange}
                className={styles.input}
              />
              <button type="submit" className={styles.searchBtn}>
                <SearchIcon fontSize="small" />
                Search
              </button>
            </form>
          </div>
        </div>

        <section className={styles.content}>
          <div className={styles.layout}>
            <div className={styles.list}>
              {visible.length === 0 ? (
                <p className={styles.empty}>No bookings found.</p>
              ) : (
                visible.map((b, i) => (
                  <RestaurantCard
                    key={`${b.restaurantName}-${b.bookingDate}-${b.bookingTime}-${i}`}
                    restaurant={b}
                    booking={{
                      time: b.bookingTime,
                      date: formatDate(b.bookingDate),
                    }}
                  />
                ))
              )}
            </div>

            <img src={poster} alt="Special offer" className={styles.poster} />
          </div>
        </section>
      </div>
    </Layout>
  );
}