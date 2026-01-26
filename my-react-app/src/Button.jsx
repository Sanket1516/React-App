//Define the triggered function
function dosomething(){
    console.log("Button Clicked")
}

function paraDoSomething(){
    console.log("Paragraph Clicked")
}

function Button(){
    return(
        <div>
            <button onClick={dosomething}>Click Me</button>
            <p onClick={paraDoSomething}>Hiiiiiiiii</p>
        </div>
    );
}

export default Button;