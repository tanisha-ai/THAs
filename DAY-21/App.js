import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';


function Food({food,cal}){
  return(
    <div>
      <h1>{food}</h1>
      <h2>you assumed this {cal}</h2>
      <button>delete</button>
      <button onClick={(e)=>{
        
      }}>edit</button>
    </div>
  )
}


function App() {
  
    const [foods,setFoods]=useState([])
    const [cal ,setCal]=useState([])
    const [value ,setValue]=useState(" ")
    const [value1 ,setValue1]=useState(" ")

    return (
    <div className="App">
      <input type="text"
      onChange={(e)=>{
      setValue(e.target.value)
      }}
      value={value}></input>
      <input type="number"
      onChange={(e)=>{
        setValue1(e.target.value) 
        }}
        value1={value1}></input>
      <button
      onClick={()=>{
        setFoods([...foods,value])
        setCal([...cal,value1])
        setValue(" ")
        setValue1(0)
        
      }}>ADD</button>
      {foods.map((food,index)=>(
        <Food key={index} food={food} cal={cal[index]}/>
      )

      )

      }
      
    
    </div>
  );
}

export default App;
