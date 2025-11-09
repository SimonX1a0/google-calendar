import style from "./CalendarHeader.module.css"
import HeaderDay from "./HeaderDay.jsx"

function CalendarHeader(){
    const days = [];
    const now = new Date();
    const today = now.getDate();
    const day = now.getDay();
    for(let i=0; i<day; i++){
        
    }
    return(
        <div className={style.header}>
            <div className={style.timeZone}>
                <span>GMT-05</span>
            </div>
            <HeaderDay day="SUN" date="5"></HeaderDay>
            <HeaderDay day="MON" date="6"></HeaderDay>
            <HeaderDay day="TUE" date="7"></HeaderDay>
            <HeaderDay day="WED" date="8"></HeaderDay>
            <HeaderDay day="THU" date="10"></HeaderDay>
            <HeaderDay day="FRI" date="11"></HeaderDay>
            <HeaderDay day="SAT" date="12"></HeaderDay>
        </div> 
    );
}

export default CalendarHeader