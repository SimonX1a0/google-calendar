import style from "./MiniCalendar.module.css"
function Calendar(prop){
    let weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const currentDate = prop.currentDate;
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const monthText = new Date(year, month).toLocaleString("default", {month: "long"})

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month+1 , 0).getDate();
    const lastDay = new Date(year, month, daysInMonth).getDay();
    const preMonthDays = new Date(year, month, 0).getDate();

    const dates = [];

    for(let i=firstDay-1; i>=0; i--){
        dates.push({
            day: preMonthDays - i,
            isCurrMon: false,
            isCurrDay:false,
        });
    }

    const isCurrMonth = currentDate.getMonth() == new Date().getMonth();

    for(let i=1; i<=daysInMonth; i++){
        dates.push({
            day: i,
            isCurrMon: (currentDate.getMonth() == new Date().getMonth()) ? true : false,
            isCurrDay: (i == new Date().getDate() && isCurrMonth) ? true : false,
        });
    }

    for(let i=lastDay+1; i < 7; i++){
        dates.push({
            day: i,
            isCurrMon: false,
            isCurrDay: false,
        });
    }

    return(
        <div className={style.calendar}>
            <div className={style.header}>
                <div className={style.date}>{`${monthText} ${year}`}</div>
                <div className={style.btn}>
                    <button className="left-btn btn" onClick={prop.lastMonth}><i className='bx bx-chevron-left'></i></button>
                    <button className="right-btn btn" onClick={prop.nextMonth}><i className='bx bx-chevron-right'></i></button>
                </div>
            </div>
            <div className={style.grids}> 
                {weekDays.map((day, i)=>(
                    <div className={style.daysTitle} key={i}>{day}</div>
                ))}
                  
                {dates.map((date, i)=>(
                    <div key={i} className={`${style.day} ${(date.isCurrDay) ? style.today : ""}`}>{date.day}</div>
                ))}
            </div>
        </div>
    );
}

export default Calendar