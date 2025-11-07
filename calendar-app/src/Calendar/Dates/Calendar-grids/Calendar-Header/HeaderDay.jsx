import style from "./CalendarHeader.module.css"
function HeaderDay(prop){
    return(
        <>
            <div className={style.day}>
                <div>{prop.day}</div>
                <div className={style.caliber}></div>
            </div>
        </>
    );
}

export default HeaderDay