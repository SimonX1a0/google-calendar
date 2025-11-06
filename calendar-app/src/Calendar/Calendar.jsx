import SideBar from "./SideBar/SideBar.jsx"
import Dates from "./Dates/Dates.jsx"
function Calendar(){
    return(
        <>
        <div className="calendar">
            <div className="calendar-body">
                <SideBar></SideBar>
                <Dates></Dates>
            </div>
        </div>

        </>
    )
}

export default Calendar