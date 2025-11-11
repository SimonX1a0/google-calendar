import style from "./SideBar.module.css"
import Header from "./Header/Header.jsx"
import MiniCalendar from "./MiniCalendar/MiniCalendar.jsx"
import Progress from './Progress/Progress.jsx'

function SideBar(prop){
    const currentDate = prop.miniDate;
    const lastMonth = prop.lastMiniMonth;
    const nextMonth = prop.nextMiniMonth;
    return(
        <>
            <div className={style.sideBar}>
                <Header></Header>
                <MiniCalendar
                currentDate={currentDate}
                lastMonth={lastMonth}
                nextMonth={nextMonth}></MiniCalendar>
                <Progress
                currentDate={currentDate}
                lastMonth={lastMonth}
                nextMonth={nextMonth}></Progress>
            </div>
        </>
    );
}

export default SideBar