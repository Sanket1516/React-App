// function Product({title,price}){
//     return(
//     <>
//     <h1>{title}</h1>
//     <h3>{price}</h3>
//     </>
//     );
// }


//or 

//give any name which will be the object containing all props
function Product(props){
    return(
    <>
    <h1>{props.title}</h1>
    <h3>{props.price}</h3>
    </>
    );
}

export default Product;