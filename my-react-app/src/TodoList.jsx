import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoList(){
    let [input,setInput] = useState("");
    //array of objects, each object has id and text
    let [TaskList, setTaskList] = useState([{ id: uuidv4(), text: "" }]);

    function onChangeInput(event){
        setInput(event.target.value);
    }

    function addTask(){
        setTaskList((prev)=>{
            return [...prev, { id: uuidv4(), text: input }];
        });
        setInput("");
    }
    
    return(
        <>
        <input type="text" placeholder="Enter the task : " value={input} onChange={onChangeInput}/>
        <button onClick={addTask}>Add Task</button>
        <br /><br /><br /><br />
        <hr />
        <ul>
            {TaskList.map((task)=>{
                return <li key={task.id}>{task.text}</li>
            })}
        </ul>        
        </>
    );
}

export default TodoList;