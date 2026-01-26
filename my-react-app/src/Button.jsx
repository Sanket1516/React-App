//Define the triggered function
function dosomething(){
    console.log("Button Clicked")
}

function paraDoSomething(){
    console.log("Paragraph Clicked")
}

function onMouseOverEvent(){
    console.log("MOuse over");
}

function onDoubleClickEvent(){
    console.log("Double Clicked");
}

function onMouseOutEvent(){
    console.log("Mouse Out");
}
function Button(){
    return(
        <div>
            <button onClick={dosomething}>Click Me</button>
            <p onClick={paraDoSomething}>Hiiiiiiiii</p>
            <p onMouseOver={onMouseOverEvent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quidem beatae esse assumenda. Magni est fuga similique fugiat esse eum totam obcaecati pariatur incidunt reiciendis. Asperiores eveniet ipsa illum dolores atque. Rem amet quasi sunt est tenetur. Provident, excepturi impedit?</p>
            <button onDoubleClick={onDoubleClickEvent}>Byeee</button>
            <p onMouseOut={onMouseOutEvent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi repellat incidunt, ducimus nam cum soluta rem enim numquam doloremque veritatis nostrum assumenda sed molestiae at debitis possimus voluptatem? Exercitationem fuga illum molestias quod, dolores ipsam laudantium omnis totam eum eaque odit officiis dignissimos iste?</p>
        </div>
    );
}

export default Button;