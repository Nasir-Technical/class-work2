import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "./component/Button";

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(["akjhsd", "asjhdkl"]);

  const [text, setText] = useState("");

  let add = () => {
    arr.push(text);
    console.log(arr);
    setArr([...arr]);
  };

  // let delet = () => {
  //   arr.splice(text);
  //   console.log(arr);
  //   setArr([...arr]);
  // };


  let del = (i) => {
    arr.splice(i , 1);
    console.log(arr);
    setArr([...arr]);
  };

  let edit = (i)=>{
    // get prompt
    let a = prompt("enter value", arr[i]);
    // arr[i] == prompt value
    arr[i] = a;
    // set State of Array
    setArr([...arr]);
  }

  return (
    <div className="App">
      <header className="App-header">
        {arr.map((x, i) => (
          <p>{x} <button onClick={()=>del(i)}>delet</button>
           <button onClick={()=>edit(i)}>edit</button></p>
        ))}

        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter Text"
        />

        <p>{text}</p>
      
        <button onClick={add}>Add</button> 
        <Button click={add} className="dark-button" label="Add todo"/> 
      </header>
    </div>
  );
}

export default App;