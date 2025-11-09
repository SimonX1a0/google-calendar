import style from "./SideBar.module.css"
import Header from "./Header/Header.jsx"
import Calendar from "./Calendar/Calendar.jsx"
import Progress from './Progress/Progress.jsx'

function SideBar(prop){
    const currentDate = prop.currentDate;
    const preMonth = prop.preMonth;
    const nextMonth = prop.nextMonth;
    return(
        <>
            <div className={style.sideBar}>
                <Header></Header>
                <Calendar
                currentDate={currentDate}
                preMonth={preMonth}
                nextMonth={nextMonth}></Calendar>
                <Progress
                currentDate={currentDate}
                preMonth={preMonth}
                nextMonth={nextMonth}></Progress>
            </div>
        </>
    );
}

export default SideBar