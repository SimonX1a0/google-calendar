import style from "./Columns.module.css"
import { useEffect, useState } from "react";
function Column(props){
    const [currentTime, setCurrentTime] = useState(new Date());
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const fraction = (minute / 60)*100;
    const list = props.events;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    })

    let divs = Array.from({length: 24}, (_, i)=>i);
    return(
        <div className={style.column}>
            {divs.map((num, i) => (
                <div className={style.cell} key={i}>
                    
                    {num == hour && props.isToday ?
                    <div 
                        style={{top: `${fraction}%`}}
                        className={style.timeline}>
                        <div className={style.timeline_circle}></div>
                    </div>
                    : null}
                </div>
            ))}
            {
                list.map((interval, idx)=>{
                    let hour = interval.start.getHours();
                    let minute = interval.start.getMinutes();
                    let top = hour*5 + (minute/60)*5;
                    let elpaseHour = interval.end.getHours() - interval.start.getHours();
                    let elapseMinute = interval.end.getMinutes() - interval.start.getMinutes();
                    let height = elpaseHour*5 + (elapseMinute/60)*5;
                    return(<div 
                        className={style.event} 
                        key={idx}
                        style={{top: `${top}rem`,
                                height: `${height}rem`,
                                backgroundColor: `${interval.color}`
                            }}
                        >
                            {interval.title}
                        </div>)
                })
            }
        </div>
    );
}

export default Column