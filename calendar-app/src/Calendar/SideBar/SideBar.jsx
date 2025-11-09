import style from "./SideBar.module.css"
import Header from "./Header/Header.jsx"
import Calendar from "./Calendar/Calendar.jsx"
import Progress from './Progress/Progress.jsx'

function SideBar(){
    return(
        <>
            <div className={style.sideBar}>
                <Header></Header>
                <Calendar></Calendar>
                <Progress></Progress>
            </div>
        </>
    );
}

export default SideBar