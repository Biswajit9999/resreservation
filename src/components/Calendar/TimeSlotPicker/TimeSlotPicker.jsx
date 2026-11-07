import styles from "./TimeSlotPicker.module.css";

const groups = [
  { label: "Morning", slots: ["11:00 AM"] },
  {
    label: "Afternoon",
    slots: [
      "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
      "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    ],
  },
  {
    label: "Evening",
    slots: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  },
];

export default function TimeSlotPicker({ selected, onSelect }) {
  return (
    <div>
      {groups.map((group) => (
        <div key={group.label} className={styles.group}>
          <p className={styles.heading}>{group.label}</p>
          <div className={styles.slots}>
            {group.slots.map((slot) => (
              <button
                key={slot}
                type="button"
                className={`${styles.slot} ${
                  selected === slot ? styles.active : ""
                }`}
                onClick={() => onSelect(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}