import style from "./Dates.module.css"
import DatesHeader from "./Dates-Header/DatesHeader.jsx"
import CalendarGrid from "./Calendar-grids/CalendarGrids.jsx"
function Dates(prop){
    const currentDate = prop.currentDate;
    const lastWeek = prop.lastWeek;
    const nextWeek = prop.nextWeek;
    return(
        <div className={style.dates}>
            <DatesHeader
            currentDate={currentDate}
            lastWeek={lastWeek}
            nextWeek={nextWeek}></DatesHeader>
            <CalendarGrid
            currentDate={currentDate}></CalendarGrid>
        </div>
    )
}

export default Dates