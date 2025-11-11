import style from "./DatesHeader.module.css"

function DatesHeader(prop){
    const lastWeek = prop.lastWeek;
    const nextWeek = prop.nextWeek;
    const month = prop.currentDate.getMonth();
    const year = prop.currentDate.getFullYear();
    const monthStr = new Date(year, month).toLocaleString("default", {month: "long"});

    return(
        <>
            <div className={style.header}>
                <button className={style.today}>Today</button>
                <i onClick={lastWeek} className={`bx  bx-chevron-left ${style.left}`}></i> 
                <i onClick={nextWeek} className={`bx  bx-chevron-right ${style.right}`}></i> 
                <span className={style.date}>{`${monthStr} ${year}`}</span>
            </div>
        </>
    );
}

export default DatesHeader