import "./Dates.css"
function Dates(){
    return(
        <div className="dates">
            <div className="header">
                <button>Today</button>
                <i class='bx  bx-chevron-left'></i> 
                <i class='bx  bx-chevron-right'></i> 
                <span>November 2025</span>
            </div>
            <div className="calendar">
                <div className="header">
                    <div>
                        <span>GMT-05</span>
                    </div>
                    <div className="day">SUN</div>
                    <div className="day">MON</div>
                    <div className="day">TUE</div>
                    <div className="day">WED</div>
                    <div className="day">THU</div>
                    <div className="day">FRI</div>
                    <div className="day">SAT</div>
                </div> 
                <div className="body">
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                </div>
            </div>
        </div>
    )
}

export default Dates