import style from "./MiniCalendar.module.css"
import { use, useContext } from "react";
import { CalendarContext } from "../../Calendar.jsx";
function Calendar(){
    const ctx = useContext(CalendarContext);
    const miniDate = ctx.miniDate;
    const setMiniDate = ctx.setMiniDate;
    const year = miniDate.getFullYear();
    const month = miniDate.getMonth();
    const monthText = miniDate.toLocaleString("default",{month:"long"});


    const lastMonth=()=>{
        const newDate=new Date(year,month-1,1);
        setMiniDate(newDate);
    }
    const nextMonth=()=>{
        const newDate=new Date(year,month+1,1);
        setMiniDate(newDate);
    }

    let weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const dates = [];
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

    for(let i=0; i<42; i++){
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        const isCurrMonth = currentDate.getMonth() === month;
        const isCurrDay = currentDate.getDate() === new Date().getDate() 
        && currentDate.getMonth() === new Date().getMonth()
        && currentDate.getFullYear() === new Date().getFullYear();

        dates.push({
            day: currentDate.getDate(),
            isCurrMonth: isCurrMonth,
            isCurrDay: isCurrDay,
            fullDate: currentDate
        });
    }

    return(
        <div className={style.calendar}>
            <div className={style.header}>
                <div className={style.date}>{`${monthText} ${year}`}</div>
                <div className={style.btn}>
                    <button onClick={lastMonth} className="left-btn btn"><i className='bx bx-chevron-left'></i></button>
                    <button onClick={nextMonth} className="right-btn btn"><i className='bx bx-chevron-right'></i></button>
                </div>
            </div>
            <div className={style.grids}> 
                {weekDays.map((day, i)=>(
                    <div className={style.daysTitle} key={i}>{day}</div>
                ))}
                  
                {dates.map((day, i)=>(
                    <div 
                        key={i} 
                        className={`${style.day} ${day.isCurrMonth ? style.currentMonth : style.otherMonth} ${day.isCurrDay ? style.today : ''}`}
                    >
                        {day.day}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calendar