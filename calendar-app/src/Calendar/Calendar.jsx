import SideBar from "./SideBar/SideBar.jsx"
import Dates from "./Dates/Dates.jsx"
function Calendar(){
    return(
        <>
        <div className="calendar">
            <SideBar></SideBar>
            <Dates></Dates>
        </div>

        </>
    )
}

export default Calendar