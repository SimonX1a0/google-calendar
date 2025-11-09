import style from "./Header.module.css"

function Header(){
    return(
        <div className={style.header}>
            <h1 className={style.title}>Active Time Tracker</h1>
        </div>
    );
}

export default Header