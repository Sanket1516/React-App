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
// function Product(props){
//     return(
//     <>
//     <h1>{props.title}</h1>
//     <h3>{props.price}</h3>
//     </>
//     );
// }

//this is how we render the features prop passed as an array
// function Product({title,price,features}){
//     return(
//     <>
//     <h1>{title}</h1>
//     <h3>{price}</h3>
//     <p>{features}</p>
//     </>
//     );
// }


//to render features as a list
function Product({title,price,features}){
    return(
    <>
    <h1>{title}</h1>
    <h3>{price}</h3>
    <p>
        {features.map((feature) => (
            <li>{feature}</li>
        ))}
    </p>
    </>
    );
}
export default Product;