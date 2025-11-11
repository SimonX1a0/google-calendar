import style from "./CalendarHeader.module.css"
import HeaderDay from "./HeaderDay.jsx"

function CalendarHeader() {

  const days = [];
  for (let i = 0; i < 7; i++) {
    const weekday = new Date(2025, 11, i).toLocaleString("default", { weekday: "short" }).toUpperCase();
    const dayNum = i;

    days.push({ weekday, dayNum });
  }

  return (
    <div className={style.header}>
      <div className={style.timeZone}>
        <span>GMT-05</span>
      </div>
      {days.map((d, i) => (
        <HeaderDay key={i} day={d.weekday} date={d.dayNum} />
      ))}
    </div>
  );
}

export default CalendarHeader;