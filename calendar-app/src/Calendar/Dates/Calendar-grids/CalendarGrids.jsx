import style from "./CalendarGrid.module.css"
import CalendarHeader from "./Calendar-Header/CalendarHeader.jsx"
import Axis from "./Calendar-Axis/Axis.jsx"
import Column from "./Calendar-Columns/Column.jsx"

import { useContext } from "react";
import { CalendarContext } from "../../Calendar.jsx";

function CalendarGrid(){
    const ctx = useContext(CalendarContext);
    const previewDate = ctx.previewDate;
    const year = previewDate.getFullYear();
    const month = previewDate.getMonth();
    const firstDay = previewDate.getDate() - previewDate.getDay();

    const intervals = ctx.intervalList;

    const weekdays = [];
    for(let i=0; i<7; i++){
        const day = new Date(year, month, firstDay + i);
        const isToday = day.getFullYear() === new Date().getFullYear() &&
                        day.getMonth() === new Date().getMonth() &&
                        day.getDate() === new Date().getDate();
        weekdays.push({
            day: day,
            isToday: isToday
        });
    }

    return(
        <div className={style.calendar}>
                <CalendarHeader></CalendarHeader>
                <div className={style.main}>
                    <Axis></Axis>
                    {weekdays.map((day, i)=>{
                        const list = intervals.filter((interval)=>(interval.start.getFullYear() == day.day.getFullYear()
                                                                && interval.start.getMonth() == day.day.getMonth()
                                                                && interval.start.getDate() == day.day.getDate()));
                        return(
                            <Column key={i} day={day.day} isToday={day.isToday} events={list}></Column>
                        );
                        })}
                </div>
            </div>
    );
}

export default CalendarGrid;