import SideBar from "./SideBar/SideBar.jsx"
import Dates from "./Dates/Dates.jsx"
import {useState, createContext} from 'react'

export const CalendarContext=createContext();
function Calendar(){
    const [previewDate,setPreviewDate]=useState(new Date());
    const [miniDate,setMiniDate]=useState(new Date());
    const [intervalList,setIntervalList]=useState([
        {
            id: 1,
            title: "example",
            color: "#ff0000",
            start: new Date(2025,11,10,9,0),
            end: new Date(2025,11,10,10,30),
        },
        {
            id: 2,
            title: "task",
            color: "#296c81ff",
            start: new Date(2025,11,20,9,0),
            end: new Date(2025,11,21,10,30),
        }
    ]);
    
    return(
        <>
            <div className="calendar-app">
                <CalendarContext.Provider value={{previewDate,setPreviewDate,miniDate,setMiniDate,intervalList,setIntervalList}}>
                    <SideBar/>
                    <Dates/>
                </CalendarContext.Provider>
            </div>
        </>
    )
}

export default Calendar