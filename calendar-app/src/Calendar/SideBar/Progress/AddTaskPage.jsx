import style from './Progress.module.css'
import { useState } from 'react'
function AddTaskPage(props){
    const show = props.show;
    const setShow = props.setShow;
    const taskList = props.list;
    const colors=['#ff5151', '#ffb451', '#64c66b', '#649dc6', '#8e64c6']
    const [colerSelected, setColerSelected] = useState();
    return(
        <div className={style.addTaskPage}
            style={
                    show ?
                    {display : 'flex'} :
                    {display: 'none'}
            }>
            <div className={style.x}>
                <i className='bx  bx-x'
                onClick={()=>setShow(false)}></i>
            </div>
            <div className={style.taskName}>
                <input type="text" placeholder='Enter Task Name' />
                <select name="category" id="category">
                    <option value="Work">Work</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Casual Learning">Learning</option>
                </select>
            </div>
            <div className={style.colors}>
                <span className={style.red}></span>
                <span className={style.orange}></span>
                <span className={style.green}></span>
                <span className={style.blue}></span>
                <span className={style.purple}></span>
            </div>
            <div className={style.add}>Add Task</div>
        </div>
    );
}

export default AddTaskPage