    import style from './Task.module.css'
    import { useContext, useState, useEffect, useRef } from 'react'
    import { CalendarContext } from '../../../Calendar';
    function Task(props){
        const ctx = useContext(CalendarContext);
        const updateInterval = ctx.updateInterval

        const task = props.task;
        const title = task.title;
        const timeID = useRef(null);
        const [started, setStarted] = useState(false);
        const [startTime, setStartTime] = useState(0);
        const [elapsedTime, setElapsedTime] = useState(0);

        useEffect(()=>{
            if(!started) return;
            timeID.current = setInterval(()=>{
                const now = new Date();
                setElapsedTime(now - startTime);
                updateInterval(startTime.getTime(), {end: now});
            }, 1000)

            return () => clearInterval(timeID.current);
        },[startTime, started, updateInterval]);

        async function start(){
            let now = new Date();
            setStartTime(now);
            setStarted(true);

            ctx.setIntervalList(prev =>
                [...prev, 
                    {
                        id: now.getTime(),
                        title: title,
                        color: task.color,
                        start: now,
                        end: now
                    }
                ]
            )
        };

        function stop(){
            setStarted(false);
            setElapsedTime(0);
        }

        let hour = Math.floor(elapsedTime /(1000 * 60 * 60)%24);
        let minute = Math.floor(elapsedTime /(1000*60) % 60);
        let second = Math.floor(elapsedTime/(1000)%60);

        let textHour = String(hour).padStart(2,'0');
        let textMinute = String(minute).padStart(2,'0');
        let textSecond = String(second).padStart(2,'0');

        
        return(
            <div className={style.task}>
                {!started ? 
                <span className="start-btn" onClick={start}><i className={`bx bx-play ${style.play}`}></i></span>
                : <span className="pause-btn" onClick={stop}><i className={`bx bx-pause ${style.pause}`}></i></span>            
                }
                <span className={style.title}>{title}</span>
                {hour>0?
                <span className={style.time}>{`${textHour}:${textMinute}`}</span>:
                <span className={style.time}>{`${textMinute}:${textSecond}`}</span>
                }
            </div>
        )
    }

    export default Task