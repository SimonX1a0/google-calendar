import style from "./Calendar.module.css"
function Calendar(){
    let weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    return(
        <div className={style.calendar}>
            <div className={style.header}>
                <div className={style.date}>{`November 2025`}</div>
                <div className={style.btn}>
                    <button className="left-btn btn"><i className='bx bx-chevron-left'></i></button>
                    <button className="right-btn btn"><i className='bx bx-chevron-right'></i></button>
                </div>
            </div>
            <div className={style.grids}> 
                {weekDays.map((day, i)=>(
                    <div className={style.daysTitle} key={i}>{day}</div>
                ))}
                  
                {Array.from({length: 35}).map((_, i)=>(
                    <div key="i" className={style.day}>{i+1}</div>
                ))}
            </div>
        </div>
    );
}

export default Calendar