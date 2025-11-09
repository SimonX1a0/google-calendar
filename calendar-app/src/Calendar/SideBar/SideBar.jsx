import style from "./SideBar.module.css"
import Header from "./Header/Header.jsx"
import Calendar from "./Calendar/Calendar.jsx"

function SideBar(){
    return(
        <>
            <div className={style.sideBar}>
                <Header></Header>
                <Calendar></Calendar>
                <div className="progress">
                    <div className="progress-header">
                        <span className="progress-title">Tasks</span>
                        <button className="progress-btn"><i className='bx bx-plus'></i></button>
                    </div>
                    <div className="progress-list">
                        <div className="progress-list-item">
                            <span className="start-btn"><i className='bx bx-play'></i></span>
                            <span className="list-item-title">Running</span>
                            <span className="list-item-time">{`00:00`}</span>
                        </div>
                        <div className="progress-list-item">
                            <span className="start-btn"><i className='bx bx-play'></i></span>
                            <span className="list-item-title">Running</span>
                            <span className="list-item-time">{`00:00`}</span>
                        </div>
                        <div className="progress-list-item">
                            <span className="start-btn"><i className='bx bx-play'></i></span>
                            <span className="list-item-title">Running</span>
                            <span className="list-item-time">{`00:00`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideBar