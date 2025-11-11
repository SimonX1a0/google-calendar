import SideBar from "./SideBar/SideBar.jsx"
import Dates from "./Dates/Dates.jsx"
import {useState} from 'react'
function Calendar(){
    const [currentDate, setCurrentDate] = useState(new Date());
    const [miniDate, setMiniDate] = useState(new Date());
    function lastWeek(){
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7));
    }
    function nextWeek(){
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7));
    }
    function lastMiniMonth(){
        setMiniDate(new Date(miniDate.getFullYear(), miniDate.getMonth() - 1, 1));
    }
    function nextMiniMonth(){
        setMiniDate(new Date(miniDate.getFullYear(), miniDate.getMonth() + 1, 1));
    }
    return(
        <>
            <div className="calendar-app">
                <SideBar 
                miniDate={miniDate}
                setCurrentDate={setCurrentDate}
                lastMiniMonth={lastMiniMonth}
                nextMiniMonth={nextMiniMonth}></SideBar>
                <Dates
                currentDate={currentDate}
                lastWeek={lastWeek}
                nextWeek={nextWeek}></Dates>
            </div>
        </>
    )
}

export default Calendar