import "./Dates.css"
function Dates(){
    return(
        <div className="dates">
            <div className="dates-header">
                <button>Today</button>
                <i class='bx  bx-chevron-left'></i> 
                <i class='bx  bx-chevron-right'></i> 
                <span>November 2025</span>
            </div>
            <div className="Dates-calendar-grids">
                <table className="Dates-calendar-table">
                    <thead>
                        <th></th>
                        <th>
                            <span>SUN</span>
                            <div>2</div>
                        </th>
                        <th>
                            <span>MON</span>
                            <div>3</div>
                        </th>
                        <th>
                            <span>TUE</span>
                            <div>4</div>
                        </th>
                        <th>
                            <span>WED</span>
                            <div>5</div>
                        </th>
                        <th>
                            <span>THU</span>
                            <div>6</div>
                        </th>
                        <th>
                            <span>FRI</span>
                            <div>7</div>
                        </th>
                        <th>
                            <span>SAT</span>
                            <div>8</div>
                        </th>
                    </thead>
                    <tr>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Dates