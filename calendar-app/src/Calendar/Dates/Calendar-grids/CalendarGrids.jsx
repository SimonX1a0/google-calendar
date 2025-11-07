import style from "./CalendarGrid.module.css"
import CalendarHeader from "./Calendar-Header/CalendarHeader.jsx"
import Axis from "./Calendar-Axis/Axis.jsx"
import Column from "./Calendar-Columns/Column.jsx"

function CalendarGrid(){
    return(
        <div className={style.calendar}>
                <CalendarHeader></CalendarHeader>
                <div className={style.main}>
                    <Axis></Axis>
                    <Column></Column>
                    <Column></Column>
                    <Column></Column>
                    <Column></Column>
                    <Column></Column>
                    <Column></Column>
                    <Column></Column>
                </div>
            </div>
    );
}

export default CalendarGrid;