import SideBar from "./SideBar/SideBar.jsx"
import Dates from "./Dates/Dates.jsx"
import {useState} from 'react'
function Calendar(){
    const [currentDate, setCurrentDate] = useState(new Date());
    function preMonth(){
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        console.log("preMonth");
    }
    function nextMonth(){
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        console.log("nextMonth");
    }
    return(
        <>
            <div className="calendar-app">
                <SideBar 
                currentDate={currentDate}
                preMonth={preMonth}
                nextMonth={nextMonth}></SideBar>
                <Dates
                currentDate={currentDate}
                preMonth={preMonth}
                nextMonth={nextMonth}></Dates>
            </div>
        </>
    )
}

export default Calendar