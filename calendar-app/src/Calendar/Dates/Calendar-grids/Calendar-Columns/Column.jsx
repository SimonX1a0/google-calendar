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
            console.log("moved");
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    function renderEvents(eventList){
        let sortedList = eventList.sort((a, b)=>(a.start - b.start));
        const lanes = [];
        for(let event of sortedList){
            let placed = false;
            for(let lane of lanes){
                let last = lane[lane.length-1];
                if(last.end <= event.start){
                    lane.push(event);
                    placed = true;
                    break;
                }
            }
            if(!placed) lanes.push([event]);
        }

        return sortedList.map((event)=>{
            const laneIndex = lanes.findIndex(l => l.includes(event));
            const laneCount = lanes.length;
            const startMin = event.start.getHours() * 60 + event.start.getMinutes();
            const endMin = event.end.getHours() * 60 + event.end.getMinutes();
            const elapse = endMin - startMin;
            return(
                <div
                    key={event.id}
                    className={style.event}
                    style={
                        {
                            display: 'flex',
                            position: 'absolute',
                            top: `${startMin/1440*100}%`,
                            width: `${100 / laneCount}%`,
                            height: `${elapse/1440*100}%`,
                            left: `${(100 / laneCount) * laneIndex}%`,
                            backgroundColor: [event.color]
                        }
                    }
                >
                    {event.title}
                </div>
            );
        });
    }



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
            {renderEvents(list)}
        </div>
    );
}

export default Column