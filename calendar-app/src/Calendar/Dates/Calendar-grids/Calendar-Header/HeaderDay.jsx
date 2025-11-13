import style from "./CalendarHeader.module.css"
function HeaderDay(prop){
    return(
        <>
            <div className={`${style.day} ${prop.isToday ? style.today : ""}`}>
                <div className={style.dayText}>{prop.day}</div>
                <div className={style.date}>{prop.date}</div>
                <div className={style.caliber}></div>
            </div>
        </>
    );
}

export default HeaderDay