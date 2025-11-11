import SideBar from "./SideBar/SideBar.jsx"
import Dates from "./Dates/Dates.jsx"
import {useState} from 'react'
function Calendar(){

    return(
        <>
            <div className="calendar-app">
                <SideBar></SideBar>
                <Dates></Dates>
            </div>
        </>
    )
}

export default Calendar