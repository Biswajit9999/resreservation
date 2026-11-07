import { useState } from "react";
import IconCard from "../IconCard/IconCard";
import restaurantsIcon from "../../assests/home.png";
import locationsIcon from "../../assests/location-icon.png";
import reservationsIcon from "../../assests/reservation-icon.png";
import specialIcon from "../../assests/special-icon.png";
import servicesIcon from "../../assests/service-icon.png";
import styles from "./HeroServices.module.css";

const items = [
  { label: "Restaurants", icon: restaurantsIcon },
  { label: "Locations", icon: locationsIcon },
  { label: "Reservations", icon: reservationsIcon },
  { label: "Special Menus", icon: specialIcon },
  { label: "Services", icon: servicesIcon },
];

export default function HeroServices() {
  const [active, setActive] = useState("Reservations");

  return (
    <div className={styles.wrap}>
      <p className={styles.heading}>You may be looking for</p>
      <div className={styles.grid}>
        {items.map((item) => (
          <IconCard
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={active === item.label}
            onClick={() => setActive(item.label)}
          />
        ))}
      </div>
    </div>
  );
}