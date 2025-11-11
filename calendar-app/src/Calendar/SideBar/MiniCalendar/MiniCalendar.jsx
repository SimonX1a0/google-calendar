import style from "./MiniCalendar.module.css"
function Calendar(prop){
    let weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const dates = [];
    for(let i=1; i<=31; i++){
        dates.push(i);
    }


    return(
        <div className={style.calendar}>
            <div className={style.header}>
                <div className={style.date}>{`November 2025`}</div>
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
                    <div key={i} className={`${style.day}`}>{date}</div>
                ))}
            </div>
        </div>
    );
}

export default Calendar