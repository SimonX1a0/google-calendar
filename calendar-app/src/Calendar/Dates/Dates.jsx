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
                    <div className="time-zone">
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
                <div className="main">
                    <div className="axis">
                        <div>1am</div>
                        <div>2am</div>
                        <div>3am</div>
                        <div>4am</div>
                        <div>5am</div>
                        <div>6am</div>
                        <div>7am</div>
                        <div>8am</div>
                        <div>9am</div>
                        <div>10am</div>
                        <div>11am</div>
                        <div>12pm</div>
                        <div>1pm</div>
                        <div>2pm</div>
                        <div>3pm</div>
                        <div>4pm</div>
                        <div>5pm</div>
                        <div>6pm</div>
                        <div>7pm</div>
                        <div>8pm</div>
                        <div>9pm</div>
                        <div>10pm</div>
                        <div>11pm</div>
                    </div>
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