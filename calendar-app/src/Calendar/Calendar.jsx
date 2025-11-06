import SideBar from "./SideBar/SideBar.jsx"
import Dates from "./Dates/Dates.jsx"
import Header from "./Header/Header.jsx"
function Calendar(){
    return(
        <>
        <div className="calendar">
            <Header></Header>
            <div className="calendar-body">
                <SideBar></SideBar>
                <Dates></Dates>
            </div>
        </div>

        </>
    )
}

export default Calendar