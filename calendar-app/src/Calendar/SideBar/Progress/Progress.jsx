import style from "./Progress.module.css"
import Task from "./Task/Task.jsx"
import AddTaskPage from './AddTaskPage.jsx'
import { useState, useContext } from "react";
import { CalendarContext } from "../../Calendar.jsx";
function Progress(){
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            title: "hello",
            color: '#36b151ff',
        }
    ]);

    const [show, setShow] = useState(false);

    
    return(
        <div className={style.progress}>
            <div className={style.header}>
                <span className={style.title}>Tasks</span>
                <button className={style.btn}
                onClick={()=>setShow(true)}>
                    <i className='bx bx-plus'></i>
                </button>
                <AddTaskPage show={show} setShow={setShow} list={taskList} setList={setTaskList}></AddTaskPage>
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