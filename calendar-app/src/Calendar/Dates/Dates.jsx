import style from "./Dates.module.css"
import DatesHeader from "./Dates-Header/DatesHeader.jsx"
import CalendarGrid from "./Calendar-grids/CalendarGrids.jsx"
function Dates(){
    return(
        <div className={style.dates}>
            <DatesHeader></DatesHeader>
            <CalendarGrid></CalendarGrid>
        </div>
    )
}

export default Dates