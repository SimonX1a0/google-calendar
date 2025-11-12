import style from "./SideBar.module.css"
import Header from "./Header/Header.jsx"
import MiniCalendar from "./MiniCalendar/MiniCalendar.jsx"
import Progress from './Progress/Progress.jsx'

function SideBar(){
    return(
        <div className={style.sideBar}>
            <Header></Header>
            <MiniCalendar></MiniCalendar>
            <Progress></Progress>
        </div>
    );
}

export default SideBar