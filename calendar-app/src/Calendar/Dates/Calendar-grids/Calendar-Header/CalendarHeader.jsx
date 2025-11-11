import style from "./CalendarHeader.module.css"
import HeaderDay from "./HeaderDay.jsx"

function CalendarHeader(prop) {
  const currentDate = prop.currentDate || new Date(); // use prop or fallback
  const today = currentDate.getDate();
  const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 6 = Saturday

  // Find the Sunday of this week
  const sunday = new Date(currentDate);
  sunday.setDate(today - dayOfWeek);

  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(sunday);
    date.setDate(sunday.getDate() + i);

    const weekday = date.toLocaleString("default", { weekday: "short" }).toUpperCase();
    const dayNum = date.getDate();

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