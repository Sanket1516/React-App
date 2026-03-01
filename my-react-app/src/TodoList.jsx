import { useState } from "react";

function TodoList(){
    let [input,setInput] = useState("");
    let [TaskList, setTaskList] = useState([]);

    function onChangeInput(event){
        setInput(event.target.value);
    }

    function addTask(){
        setTaskList((prev)=>{
            return [...prev, input];
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
                return <li>{task}</li>
            })}
        </ul>        
        </>
    );
}

export default TodoList;