import style from "./DatesHeader.module.css"

function DatesHeader(){
    return(
        <>
            <div className={style.header}>
                <button className={style.today}>Today</button>
                <i className={`bx  bx-chevron-left ${style.left}`}></i> 
                <i className={`bx  bx-chevron-right ${style.right}`}></i> 
                <span className={style.date}>{`November 2025`}</span>
            </div>
        </>
    );
}

export default DatesHeader