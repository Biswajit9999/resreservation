import DaySelector from "./DaySelector/DaySelector";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";

export default function Calendar({ date, onDateChange, time, onTimeChange }) {
  return (
    <div>
      <DaySelector selected={date} onChange={onDateChange} />
      <TimeSlotPicker selected={time} onSelect={onTimeChange} />
    </div>
  );
}