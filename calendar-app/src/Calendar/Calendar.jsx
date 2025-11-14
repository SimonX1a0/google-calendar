import SideBar from "./SideBar/SideBar.jsx"
import Dates from "./Dates/Dates.jsx"
import {useState, createContext} from 'react'

export const CalendarContext=createContext();
function Calendar(){
    const [previewDate,setPreviewDate]=useState(new Date());
    const [miniDate,setMiniDate]=useState(new Date());
    const [taskList,setTaskList]=useState([{
        id:1,
        title:"Sample Task",
        category:"Work",
        startTime:new Date(),
        totalTime:60,
        intervals: [
            {
                start: new Date("2025-11-13T10:00:00"),
                end: new Date("2025-11-13T11:15:00"),
            },
            {
                start: new Date("2025-11-14T10:00:00"),
                end: new Date("2025-11-14T11:15:00"),
            }
        ]
    }]);
    
    return(
        <>
            <div className="calendar-app">
                <CalendarContext.Provider value={{previewDate,setPreviewDate,miniDate,setMiniDate,taskList,setTaskList}}>
                    <SideBar/>
                    <Dates/>
                </CalendarContext.Provider>
            </div>
        </>
    )
}

export default Calendar