import style from "./Columns.module.css"
import { useEffect, useState } from "react";
function Column(props){

    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const fraction = (minute / 60)*100;

    useEffect(() => {
        const interval = setInterval(() => {
            // Force re-render every minute to update the timeline position
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
        </div>
    );
}

export default Column