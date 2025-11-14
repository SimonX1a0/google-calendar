import style from './Task.module.css'

function Task(props){
    const task = props.task;
    const title = task.title;
    const totalTime = task.totalTime;
    return(
        <div className={style.task}>
            <span className="start-btn"><i className={`bx bx-play ${style.play}`}></i></span>
            <span className={style.title}>{title}</span>
            <span className={style.time}>{`00:00`}</span>
        </div>
    )
}

export default Task