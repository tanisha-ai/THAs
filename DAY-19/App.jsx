import logo from './logo.svg';
import './App.css';
import {useState} from "react";

 


function Box(props){
const [state, setstate] = useState(0)
  return(
    <button className="box" onClick={()=>{
      const newstate=state+1;
      setstate(newstate);

    }}>{state}</button>
    
  )
}


function App() {
  return (
    <div className="App">
     <Box />
     <Box />
     <Box />
     <Box />
    </div>
  );
}

export default App;
