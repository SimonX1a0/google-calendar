import style from "./DatesHeader.module.css"

function DatesHeader(){
    return(
        <>
            <div className={style.header}>
                <button>Today</button>
                <i className='bx  bx-chevron-left'></i> 
                <i className='bx  bx-chevron-right'></i> 
                <span>November 2025</span>
            </div>
        </>
    );
}

export default DatesHeader