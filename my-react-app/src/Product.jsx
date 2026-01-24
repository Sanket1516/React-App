import './Product.css';
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
// function Product({title,price,features}){
//     return(
//     <>
//     <h1>{title}</h1>
//     <h3>{price}</h3>
//     <p>
//         {features.map((feature) => (
//             <li>{feature}</li>
//         ))}
//     </p>
//     </>
//     );
// }

//Conditionals in react
//1st way if we have to get two components based on condition
// function Product({title,price}){
//     return(
//     <>
//     <h1>{title}</h1>
//     <h3>{price}</h3>
//     {price>=1000 ? <p>Discount of 10% available</p> : <a href="#">Get Discount</a>}
//     </>
//     );
// }

//if we to return only one component based on condition
// function Product({title,price}){
//     return(
//     <>
//     <h1>{title}</h1>
//     <h3>{price}</h3>
//     {price>=1000 && <p>Discount of 10% available</p>}
//     </>
//     );
// }

//Dynamic or conditional styling in react
function Product({title,price}){
    //define the style object
    let styles = {
        backgroundColor : price>=1000 ? "yellow" : null,
    }
    return(
    <div className="product" style={styles}>
    <h1>{title}</h1>
    <h3>{price}</h3>
    {price>=1000 && <p>Discount of 10% available</p>}
    </div>
    );
}
export default Product;