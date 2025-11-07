import style from "./Columns.module.css"

function Column(){
    let divs = Array.from({length: 24}, (_, i)=>i+1);
    return(
        <div className={style.column}>
            {divs.map((num) => (
                <div></div>
            ))}
        </div>
    );
}

export default Column