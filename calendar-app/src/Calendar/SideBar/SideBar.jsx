import "./SideBar.css"

function SideBar(){
    return(
        <>
            <div className="side-bar">
                <div className="side-bar-header"></div>
                <div className="calendar">
                    <div className="calendar-header">
                        <div className="calendar-date">{`November 2025`}</div>
                        <div className="calendar-header-btns">
                            <button className="left-btn btn"><i className='bx bx-chevron-left'></i></button>
                            <button className="right-btn btn"><i className='bx bx-chevron-right'></i></button>
                        </div>
                    </div>
                    <div className="calendar-grids">    
                        <table className="days-of-week">
                            <thead>
                                <tr>
                                    <th>S</th>
                                    <th>M</th>
                                    <th>T</th>
                                    <th>W</th>
                                    <th>T</th>
                                    <th>F</th>
                                    <th>S</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>16</td>
                                    <td>17</td>
                                    <td>18</td>
                                    <td>19</td>
                                    <td>20</td>
                                    <td>21</td>
                                </tr>
                                <tr>
                                    <td>22</td>
                                    <td>23</td>
                                    <td>24</td>
                                    <td>25</td>
                                    <td>26</td>
                                    <td>27</td>
                                    <td>28</td>
                                </tr>
                                <tr>
                                    <td>29</td>
                                    <td>30</td>
                                    <td>31</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="progress">
                    <div className="progress-header">
                        <span className="progress-title">Tasks</span>
                        <button className="progress-btn"><i class='bx bx-plus'></i></button>
                    </div>
                    <div className="progress-list">
                        <div className="progress-list-item">
                            <span className="start-btn"><i class='bx bx-play'></i></span>
                            <span className="list-item-title">Running</span>
                            <span className="list-item-time">{`00:00`}</span>
                        </div>
                        <div className="progress-list-item">
                            <span className="start-btn"><i class='bx bx-play'></i></span>
                            <span className="list-item-title">Running</span>
                            <span className="list-item-time">{`00:00`}</span>
                        </div>
                        <div className="progress-list-item">
                            <span className="start-btn"><i class='bx bx-play'></i></span>
                            <span className="list-item-title">Running</span>
                            <span className="list-item-time">{`00:00`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideBar