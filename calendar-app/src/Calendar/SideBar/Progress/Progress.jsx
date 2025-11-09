import style from "./Progress.module.css"
import Task from "./Task/Task.jsx"
function Progress(){
    return(
        <div className={style.progress}>
            <div className={style.header}>
                <span className={style.title}>Tasks</span>
                <button className={style.btn}><i className='bx bx-plus'></i></button>
            </div>
            <div className="progress-list">
                <Task task="Running"></Task>
                <Task task="Eating"></Task>
            </div>
        </div>
    )
}

export default Progress