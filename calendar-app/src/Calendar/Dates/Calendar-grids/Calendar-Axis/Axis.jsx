import style from "./Axis.module.css"

function Axis(){
    const divs = [];
    const times = [];
    for(let i=1; i< 24; i++){
        divs.push(<div key={i}></div>);
        let suffix = (i<12) ? ' am' : ' pm'
        let display = Math.ceil(i%12.5) + suffix;
        times.push(display);
    }

    return(
        <div className={style.axis}>
            <div className={style.time}>
                <div></div>
                {times.map((time, idx)=>(
                    <div key={idx}><span>{time}</span></div>
                ))}
            </div>
            <div className={style.caliber}>{divs}</div>
        </div>
    );
}

export default Axis