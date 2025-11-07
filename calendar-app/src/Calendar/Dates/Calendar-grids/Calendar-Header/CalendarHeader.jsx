import style from "./CalendarHeader.module.css"

function CalendarHeader(){
    return(
        <div className={style.header}>
            <div className="time-zone">
                <span>GMT-05</span>
            </div>
            <div className="day">SUN</div>
            <div className="day">MON</div>
            <div className="day">TUE</div>
            <div className="day">WED</div>
            <div className="day">THU</div>
            <div className="day">FRI</div>
            <div className="day">SAT</div>
        </div> 
    );
}

export default CalendarHeader