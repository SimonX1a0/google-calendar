import style from "./CalendarHeader.module.css"
import HeaderDay from "./HeaderDay.jsx"
import { useContext } from "react";
import { CalendarContext } from "../../../Calendar.jsx";
function CalendarHeader() {
  const ctx = useContext(CalendarContext);
  const previewDate = ctx.previewDate;
  const day = previewDate.getDay();
  const startDate = new Date(previewDate.getFullYear(), previewDate.getMonth(), previewDate.getDate() - day);
  
  const days = [];
  for (let i = 0; i < 7; i++) {
    const weekday = new Date(2025, 11, i).toLocaleString("default", { weekday: "short" }).toUpperCase();
    const dayNum = startDate.getDate() + i;
    const isToday = previewDate.getFullYear() === new Date().getFullYear() &&
                    previewDate.getMonth() === new Date().getMonth() &&
                    dayNum === new Date().getDate();


    days.push({ weekday, dayNum, isToday });
  }

  const timezone = Math.floor(new Date().getTimezoneOffset()/60);

  return (
    <div className={style.header}>
      <div className={style.timeZone}>
        <span>{`GMT ${timezone>0 ? '-' : '+'} ${timezone}`}</span>
      </div>
      {days.map((d, i) => (
        <HeaderDay key={i} day={d.weekday} date={d.dayNum} />
      ))}
    </div>
  );
}

export default CalendarHeader;