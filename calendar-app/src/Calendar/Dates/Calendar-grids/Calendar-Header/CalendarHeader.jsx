import style from "./CalendarHeader.module.css"
import HeaderDay from "./HeaderDay.jsx"

function CalendarHeader(){
    return(
        <div className={style.header}>
            <div className={style.timeZone}>
                <span>GMT-05</span>
            </div>
            <HeaderDay day="SUN"></HeaderDay>
            <div className={style.day}>MON</div>
            <div className={style.day}>TUE</div>
            <div className={style.day}>WED</div>
            <div className={style.day}>THU</div>
            <div className={style.day}>FRI</div>
            <div className={style.day}>SAT</div>
        </div> 
    );
}

export default CalendarHeader