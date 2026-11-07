import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Button, InputAdornment, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchBar.module.css";

const API = "https://restaurantdata.onrender.com";

const fieldSx = {
  bgcolor: "#f7f8fc",
  height: 44,
  fontSize: 13,
  fontFamily: "inherit",
  "& fieldset": { border: "none" },
};

export default function SearchBar() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [state, setState] = useState(params.get("state") || "");
  const [city, setCity] = useState(params.get("city") || "");

  // fetch states once
  useEffect(() => {
    axios
      .get(`${API}/states`)
      .then((res) => setStates(res.data))
      .catch((err) => console.error(err));
  }, []);

  // fetch cities whenever the state changes
  useEffect(() => {
    if (!state) {
      setCities([]);
      return;
    }
    axios
      .get(`${API}/cities/${encodeURIComponent(state)}`)
      .then((res) => setCities(res.data))
      .catch((err) => console.error(err));
  }, [state]);

  const handleState = (e) => {
    setState(e.target.value);
    setCity("");
    setCities([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state || !city) return;
    navigate(
      `/search?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div id="state" className={styles.field}>
        <Select
          fullWidth
          displayEmpty
          value={state}
          onChange={handleState}
          sx={fieldSx}
          inputProps={{ "aria-label": "State" }}
          MenuProps={{ PaperProps: { style: { maxHeight: 260 } } }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          }
          renderValue={(v) => v || <span className={styles.placeholder}>State</span>}
        >
          {states.length === 0 && (
            <MenuItem disabled value="">Loading…</MenuItem>
          )}
          {states.map((s) => (
            <MenuItem key={s} value={s}>{s}</MenuItem>
          ))}
        </Select>
      </div>

      <div id="city" className={styles.field}>
        <Select
          fullWidth
          displayEmpty
          disabled={!state}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          sx={fieldSx}
          inputProps={{ "aria-label": "City" }}
          MenuProps={{ PaperProps: { style: { maxHeight: 260 } } }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          }
          renderValue={(v) => v || <span className={styles.placeholder}>City</span>}
        >
          {cities.length === 0 && (
            <MenuItem disabled value="">Loading…</MenuItem>
          )}
          {cities.map((c) => (
            <MenuItem key={c} value={c}>{c}</MenuItem>
          ))}
        </Select>
      </div>

      <Button
        type="submit"
        id="searchBtn"
        variant="contained"
        disableElevation
        startIcon={<SearchIcon />}
        sx={{
          height: 44,
          bgcolor: "#2aa7ff",
          textTransform: "none",
          fontFamily: "inherit",
          fontSize: 13,
          "&:hover": { bgcolor: "#1e96ea" },
        }}
      >
        Search
      </Button>
    </form>
  );
}