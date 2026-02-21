function Counter(){
    let count = 0;
    function on_click(){
        count += 1;
        console.log(count);
    }

    return(
        <div>
            <h1>The Count is : {count}</h1>
            <button onClick = {on_click}>Click the button for increment</button>
        </div>
    );
}

export default Counter;