import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format, startOfDay } from "date-fns";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Calendar from "../Calendar/Calendar";
import AutohideSnackbar from "../AutohideSnackbar/AutohideSnackbar";
import styles from "./BookingModal.module.css";

export default function BookingModal({ restaurant, open, onClose }) {
  const navigate = useNavigate();
  const [date, setDate] = useState(startOfDay(new Date()));
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  // start fresh every time the modal opens
  useEffect(() => {
    if (open) {
      setDate(startOfDay(new Date()));
      setTime("");
      setError("");
    }
  }, [open]);

  if (!restaurant) return null;

  const handleConfirm = () => {
    if (!date || !time) {
      setError("Please select a date and a time slot");
      return;
    }

    const booking = {
      ...restaurant,
      bookingDate: format(date, "yyyy-MM-dd"),
      bookingTime: time,
    };

    let saved = [];
    try {
      const stored = JSON.parse(localStorage.getItem("bookings"));
      if (Array.isArray(stored)) saved = stored;
    } catch {
      saved = [];
    }

    localStorage.setItem("bookings", JSON.stringify([...saved, booking]));
    onClose();
    navigate("/my-bookings");
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="sm"
        scroll="body"
        PaperProps={{ sx: { m: 2, borderRadius: 2 } }}
      >
        <div className={styles.modal}>
          <button
            type="button"
            className={styles.close}
            aria-label="Close"
            onClick={onClose}
          >
            <CloseIcon fontSize="small" />
          </button>

          <h2 className={styles.title}>{restaurant.restaurantName}</h2>
          <p className={styles.place}>{restaurant.address}</p>

          <Calendar
            date={date}
            onDateChange={setDate}
            time={time}
            onTimeChange={setTime}
          />

          <button
            type="button"
            className={styles.confirm}
            onClick={handleConfirm}
          >
            Confirm Booking
          </button>
        </div>
      </Dialog>

      <AutohideSnackbar
        open={Boolean(error)}
        message={error}
        onClose={() => setError("")}
      />
    </>
  );
}