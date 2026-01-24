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
//we can also pass other types of props like arrays, objects, functions, etc.
// function ProductTab(){
//     return (
//         <>
//         <Product title="Laptop" price = {1000} features={["durable","lightweight","heavy"]}/>
//         <Product title="Mouse" price = {50} features={["wireless","ergonomic"]}/>
//         <Product title="Keyboard" price = {100} features={["mechanical","backlit"]}/>
//         </>
//     );
// }

//or we can pass an array
// function ProductTab(){
//     featuresLaptop = ["durable","lightweight","heavy"];
//     featuresMouse = ["wireless","ergonomic"];
//     featuresKeyboard = ["mechanical","backlit"];
//     return (
//         <>
//         <Product title="Laptop" price = {1000} features={featuresLaptop}/>
//         <Product title="Mouse" price = {50} features={featuresMouse}/>
//         <Product title="Keyboard" price = {100} features={featuresKeyboard}/>
//         </>
//     );
// }

//to pass object
// function ProductTab(){
//     featuresLaptop = {a : "durable",b : "lightweight",c : "heavy"};
//     featuresMouse = {a : "wireless",b : "ergonomic"};
//     featuresKeyboard = {a : "mechanical",b : "backlit"};
//     return (
//         <>
//         <Product title="Laptop" price = {1000} features={featuresLaptop}/>
//         <Product title="Mouse" price = {50} features={featuresMouse}/>
//         <Product title="Keyboard" price = {100} features={featuresKeyboard}/>
//         </>
//     );
// }
export default ProductTab;