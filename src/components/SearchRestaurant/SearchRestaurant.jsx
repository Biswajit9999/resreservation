import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { FaRegCheckCircle } from "react-icons/fa";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import BookingModal from "../BookingModal/BookingModal";
import poster from "../../assests/restoffer2.png";
import styles from "./SearchRestaurant.module.css";

const API = "https://restaurantdata.onrender.com";

export default function SearchRestaurant() {
  const [params] = useSearchParams();
  const state = params.get("state");
  const city = params.get("city");

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!state || !city) return;

    let ignore = false;
    setLoading(true);
    setError("");

    axios
      .get(`${API}/restaurants`, { params: { state, city } })
      .then((res) => {
        if (!ignore) setRestaurants(res.data);
      })
      .catch(() => {
        if (!ignore) setError("Could not load restaurants. Please try again.");
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [state, city]);

  if (!state || !city) {
    return (
      <section className={styles.section}>
        <p className={styles.info}>
          Select a state and city to find restaurants.
        </p>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      {loading ? (
        <div className={styles.loading}>
          <CircularProgress size={32} />
          <p>
            Loading restaurants… this can take up to a minute the first time.
          </p>
        </div>
      ) : error ? (
        <p className={styles.info}>{error}</p>
      ) : (
        <>
          <h1 className={styles.title}>
            {`${restaurants.length} restaurants available in ${city}`}
          </h1>
          <p className={styles.sub}>
            <FaRegCheckCircle className={styles.check} />
            Book tables with minimum wait-time &amp; verified restaurant details
          </p>

          <div className={styles.layout}>
            <div className={styles.list}>
              {restaurants.map((r) => (
                <RestaurantCard
                  key={`${r.restaurantName}-${r.address}`}
                  restaurant={r}
                  onBook={() => setSelected(r)}
                />
              ))}
            </div>

            <img src={poster} alt="Special offer" className={styles.poster} />
          </div>
        </>
      )}

      <BookingModal
        restaurant={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
