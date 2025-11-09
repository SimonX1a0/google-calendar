import style from './Task.module.css'

function Task(prop){
    return(
        <div className={style.task}>
            <span className="start-btn"><i className={`bx bx-play ${style.play}`}></i></span>
            <span className={style.title}>{prop.task}</span>
            <span className={style.time}>{`00:00`}</span>
        </div>
    )
}

export default Task