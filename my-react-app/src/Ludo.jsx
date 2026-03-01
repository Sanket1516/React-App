import {use, useState} from 'react';

function Ludo (){
    let [score, setScore] = useState({
        red: 0,
        blue: 0,
        green: 0,
        yellow: 0
    });

    let [arr,setArray] = useState([""]);

function onclickRed(){
    setScore((prev)=>{
        return {...prev, red: prev.red + 1}
    })
    setArray((prev)=>{
        return [...prev, "red"];
    });
}

function onclickBlue(){
    setScore((prev)=>{
        return {...prev, blue: prev.blue + 1}
    });
    setArray((prev)=>{
        return [...prev, "blue"];
    }); 
}
function onclickGreen(){
    setScore((prev)=>{
        return {...prev, green: prev.green + 1}
    });
    setArray((prev)=>{
        return [...prev, "green"];
    });
}
function onclickYellow(){
    setScore((prev)=>{
        return {...prev, yellow: prev.yellow + 1}
    });
    setArray((prev)=>{
        return [...prev, "yellow"];
    });
}
    return (
        <>
        <h1>{arr}</h1>
        <br />
        <p>Red Score : {score.red}</p>
        <button onClick={onclickRed} style={{backgroundColor: "red"}}>+1</button>
        <br />
        <p>Blue Score : {score.blue}</p>
        <button onClick={onclickBlue} style={{backgroundColor: "blue"}}>+1</button>
        <br />
        <p>Green Score : {score.green}</p>
        <button onClick={onclickGreen} style={{backgroundColor: "green"}}>+1</button>
        <br />
        <p>Yellow Score : {score.yellow}</p>
        <button onClick={onclickYellow} style={{backgroundColor: "yellow"}}>+1</button>
        </>
    )
}


//another Method to update the state of score
function Ludo2 (){
    let [score, setScore] = useState({
        red: 0,
        blue: 0,
        green: 0,
        yellow: 0
    });

    let [arr,setArray] = useState([""]);

    return (
        <>
        <h1>{arr}</h1>
        <br />

        <p>Red Score : {score.red}</p>
        <button onClick={()=>{
            setScore((prev)=>{
                return {...prev, red: prev.red + 1}
            });
            setArray((prev)=>{
                return [...prev, "red"];
            });     
        }} style={{backgroundColor: "red"}}>+1</button>

        <br />

        <p>Blue Score : {score.blue}</p>
        <button onClick={()=>{
            setScore((prev)=>{
                return {...prev, blue: prev.blue + 1}
            });
            setArray((prev)=>{
                return [...prev, "blue"];
            });     
        }} style={{backgroundColor: "blue"}}>+1</button>
        
        <br />
        <p>Green Score : {score.green}</p>
        <button onClick={()=>{
            setScore((prev)=>{
                return {...prev, green: prev.green + 1}
            });
            setArray((prev)=>{
                return [...prev, "green"];
            });     
        }} style={{backgroundColor: "green"}}>+1</button>
        <br />
        <p>Yellow Score : {score.yellow}</p>
        <button onClick={()=>{
            setScore((prev)=>{
                return {...prev, yellow: prev.yellow + 1}
            });
            setArray((prev)=>{
                return [...prev, "yellow"];
            });     
        }} style={{backgroundColor: "yellow"}}>+1</button>
        </>
    )
}

export {Ludo, Ludo2};