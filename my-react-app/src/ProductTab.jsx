import Product from './Product.jsx';

// function ProductTab(){
//     return (
//         <>
//         <Product/>
//         <Product/>
//         <Product/>
//         </>
//     );
// }
//use of props in react
function ProductTab(){
    return (
        <>
        <Product title="Laptop" price = {1000}/>
        <Product title="Mouse" price = {50}/>
        <Product title="Keyboard" price = {100}/>
        </>
    );
}
export default ProductTab;