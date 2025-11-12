import style from "./DatesHeader.module.css"
import { useContext } from "react";
import { CalendarContext } from "../../Calendar.jsx";
function DatesHeader(){

    const ctx = useContext(CalendarContext);
    const previewDate = ctx.previewDate;
    const setPreviewDate = ctx.setPreviewDate;
    const setMiniDate = ctx.setMiniDate;

    const today = ()=>{
        const now = new Date();
        setPreviewDate(now);
        setMiniDate(now);
    }

    const nextWeek=()=>{
        setPreviewDate(new Date(previewDate.getFullYear(), previewDate.getMonth(), previewDate.getDate()+7));
        setMiniDate(new Date(previewDate.getFullYear(), previewDate.getMonth(), previewDate.getDate()+7));
        console.log(previewDate);
    }

    const lastWeek=()=>{
        setPreviewDate(new Date(previewDate.getFullYear(), previewDate.getMonth(), previewDate.getDate()-7));
        setMiniDate(new Date(previewDate.getFullYear(), previewDate.getMonth(), previewDate.getDate()-7));
        console.log(previewDate);
    }


    return(
        <>
            <div className={style.header}>
                <button
                    className={style.today}
                    onClick={today}
                >Today</button>
                <i
                    className={`bx  bx-chevron-left ${style.left}`}
                    onClick={lastWeek}
                ></i> 
                <i 
                    className={`bx  bx-chevron-right ${style.right}`}
                    onClick={nextWeek}
                ></i> 
                <span className={style.date}>{`November 2025`}</span>
            </div>
        </>
    );
}

export default DatesHeader