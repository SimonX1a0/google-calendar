import style from "./Progress.module.css"
import Task from "./Task/Task.jsx"
import { useContext } from "react";
import { CalendarContext } from "../../Calendar.jsx";
function Progress(){
    const ctx = useContext(CalendarContext);
    const taskList = [
        {
            id: 1,
            title: "hello",
            color: '#36b151ff',
        }
    ];
    return(
        <div className={style.progress}>
            <div className={style.header}>
                <span className={style.title}>Tasks</span>
                <button className={style.btn}><i className='bx bx-plus'></i></button>
            </div>
            <div className="progress-list">
                {taskList.map((task)=>(
                    <Task key={task.id} task={task}/>
                ))}
            </div>
        </div>
    )
}

export default Progress