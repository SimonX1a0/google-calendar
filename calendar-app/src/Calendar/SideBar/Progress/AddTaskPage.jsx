import style from './Progress.module.css'
import { useState } from 'react'
function AddTaskPage(props){
    const show = props.show;
    const setShow = props.setShow;
    const taskList = props.list;
    const setTaskList = props.setList;
    const colors=['#ff5151', '#ffb451', '#64c66b', '#649dc6', '#8e64c6']
    const [colorSelected, setColorSelected] = useState();

    const input = document.getElementById('userInput');

    function close(){
        setColorSelected();
        setShow(false);
        input.value = '';
    }

    function addTask(){
        if(input.value === '') return;
        if(colorSelected == null) return;
        setTaskList([...taskList, {
            id: new Date().getTime(),
            title: input.value,
            color: colorSelected
        }])

        input.value = '';
        setColorSelected();
        close();
    }

    return(
        <div className={style.addTaskPage}
            style={
                    show ?
                    {display : 'flex'} :
                    {display: 'none'}
            }>
            <div className={style.x}>
                <i className='bx  bx-x'
                onClick={close}></i>
            </div>
            <div className={style.taskName}>
                <input id='userInput' type="text" placeholder='Enter Task Name' />
                <select name="category" id="category">
                    <option value="Work">Work</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Casual Learning">Learning</option>
                </select>
            </div>
            <div className={style.colors}>
                <span className={`${style.red} ${colorSelected == '#ff5151' ? `${style.selected}` : ''}`} onClick={()=>setColorSelected(colors[0])} ></span>
                <span className={`${style.orange} ${colorSelected == '#ffb451' ? `${style.selected}` : ''}`} onClick={()=>setColorSelected(colors[1])}></span>
                <span className={`${style.green} ${colorSelected == '#64c66b' ? `${style.selected}` : ''}`} onClick={()=>setColorSelected(colors[2])}></span>
                <span className={`${style.blue} ${colorSelected == '#649dc6' ? `${style.selected}` : ''}`} onClick={()=>setColorSelected(colors[3])}></span>
                <span className={`${style.purple} ${colorSelected == '#8e64c6' ? `${style.selected}` : ''}`} onClick={()=>setColorSelected(colors[4])}></span>
            </div>
            <div className={style.add} onClick={addTask}>Add Task</div>
        </div>
    );
}

export default AddTaskPage