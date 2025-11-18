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
            start: new Date(2025,10,17,9,0),
            end: new Date(2025,10,17,9,30),
        },
        {
            id: 2,
            title: "task",
            color: "#296c81ff",
            start: new Date(2025,10,17,9,0),
            end: new Date(2025,10,17,18,0),
        }
    ]);
    
    function updateInterval(id, endTime){
        setIntervalList(prev=>
            prev.map(event =>
                event.id === id
                ? {...event, ...endTime}
                : event
            )
        )
    }

    return(
        <>
            <div className="calendar-app">
                <CalendarContext.Provider 
                value={{previewDate, setPreviewDate,
                        miniDate, setMiniDate,
                        intervalList, setIntervalList,
                        updateInterval}}>
                    <SideBar/>
                    <Dates/>
                </CalendarContext.Provider>
            </div>
        </>
    )
}

export default Calendar