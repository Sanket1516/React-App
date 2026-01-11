import './App.css'
// function App() {
//   return <h1>Hello World</h1>;
// }

//how to create a component
function Title() {
  return (
    //content it haves to return
  <h1>Hello World</h1>
  );
}

function Paragraph(){
  return (
    <p>I am a best coder in the World</p>
  );
}

//if we have to return a single component
// function App() {
//   //to use the component
//   return <Title />;
// }


//if we have to return multiple component
function App(){
  return (
    <div>
      <Title/>
      <Paragraph/>
    </div>
  );
}

export default App
