import logo from './logo.svg';
import './App.css';


const arr=[...Array(64).keys()]
let change=true
var backgroundColor='white'
function Card(){
  return(
    // <div className={bk==false?"black":"white"}>
    
    // </div>
    arr.map((i,index)=>
      <div className="box" style={{backgroundColor :i<8?i%2==0?'black':'white':i<16?i%2==0?'white':'black':i<24?i%2==0?'black':'white':
      i<32?i%2==0?'white':'black':i<40?i%2==0?'black':'white':i<48?i%2==0?'white':'black':i<56?i%2==0?'black':'white':i%2==0?'white':'black'}}  ></div>
    )
  )
  }
// function Row1(){
//   return(
//     <div className="row1">
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//     </div>

//   )
// }
// function Row2(){
//   return(
//     <div className="row2">
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//     </div>

//   )
// }


function App() {
  return (
    <div className="App">
    {/* <Row1/>
    <Row2/>
    <Row1/>
    <Row2/>
    <Row1/>
    <Row2/>
    <Row1/>
    <Row2/> */}
    
       
     <Card />
      
       
    
    </div>
  )

  }
export default App;
