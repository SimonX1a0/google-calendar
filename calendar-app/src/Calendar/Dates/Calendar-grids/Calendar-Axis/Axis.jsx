import style from "./Axis.module.css"

function Axis(){
    const times = [];
    for(let i=1; i< 24; i++){
        let suffix = (i<12) ? 'am' : 'pm'
        let display = i%12 + suffix;
        times.push(display);
    }
    return(
        <div className={style.axis}>
            <div></div>
            {times.map((time)=>(
                <div><span>{time}</span></div>
            ))}
        </div>
    );
}

export default Axis