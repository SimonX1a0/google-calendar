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

                    {
                        list.map((interval, idx)=>{
                            return(
                            (interval.start.getHours() == num) ?
                            <div 
                                className="interval"
                                key={idx}

                            >
                                event
                            </div>
                            : null);
                        })
                    }
                    
                </div>
            ))}
        </div>
    );
}

export default Column