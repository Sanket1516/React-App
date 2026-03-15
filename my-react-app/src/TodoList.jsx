import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoList(){
    let [input,setInput] = useState("");
    //array of objects, each object has id and text
    let [TaskList, setTaskList] = useState([{ id: uuidv4(), text: "" ,isdone:false}]);

    function onChangeInput(event){
        setInput(event.target.value);
    }

    function addTask(){
        setTaskList((prev)=>{
            return [...prev, { id: uuidv4(), text: input ,isdone:false}];
        });
        setInput("");
    }

    function deleteTask(id){
     setTaskList((prev) => prev.filter((t) => t.id !== id));
 
    }

function UpdateAll() {
    setTaskList((prev) => {
        return prev.map((todo) => {
            return {
                ...todo,
                text: todo.text.toUpperCase()
            };
        });
    });
}

function updateTask(id) {
    setTaskList((prev) => {
        return prev.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text: todo.text.toUpperCase()
                };
            }
            return todo;
        });
    });
}

function markAsDone(id) {
    setTaskList((prev) => {
        return prev.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isdone: !todo.isdone
                };
            }
            return todo;
        });
    });

}

    let style = {
        textDecoration: "line-through"
    }

    return(
        <>
        <input type="text" placeholder="Enter the task : " value={input} onChange={onChangeInput}/>
        <button onClick={addTask}>Add Task</button>
        <br /><br /><br /><br />
        <hr />
        <ul>
            {TaskList.map((task) => (
                <li key={task.id}>
                    <span style={task.isdone ? style : null}>{task.text}</span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                    <button onClick={() => updateTask(task.id)}>Update</button>
                    <button onClick={() => markAsDone(task.id)}>Mark as Done</button>
                </li>
            ))}
        </ul>
        <button onClick={UpdateAll}>Update All</button>       
        </>
    );
}

export default TodoList;