import './App.css';

function Card(props){
    console.log(props)
    return(
        <div className="card">
         <img src={props.img} alt="" />
         <h4>{props.title}</h4>
         <h6>you have consumed {props.cal} cals today</h6>
        </div>
    )
}

const obj=[{
    img:"http://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger.jpg",
     title:"Burger",
      cal:"69"
    },
    {
        img:"https://contenthandler.azureedge.net/recp/426/2000/0/387.jpg",
        title:"Pizza",
         cal:"56"
    },

    {
        img:"https://tse4.mm.bing.net/th?id=OIP.L2DVHDpwkjTKIBdIJIP4TgHaHa&pid=Api&P=0&w=300&h=300" ,
        title:"coke",
         cal:"500"   
    },
    {
        img:"https://cookiesandcups.com/wp-content/uploads/2012/12/browniepudding-3.jpg",
        title:"Browne",
         cal:"100"
    },
    {
     img:"https://cdn.theculturetrip.com/wp-content/uploads/2016/04/pani_puri1.jpg",
     title:"Pani puri" ,
     cal:"10" 
    }



    ]


function Cards(){
    return(
        <div className="cards">
        {/* <Card img="http://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger.jpg" title="Burger" cal="69" />
        <Card img="https://contenthandler.azureedge.net/recp/426/2000/0/387.jpg"title="Pizza" cal="56" />
        <Card img="https://tse4.mm.bing.net/th?id=OIP.L2DVHDpwkjTKIBdIJIP4TgHaHa&pid=Api&P=0&w=300&h=300" title="coke" cal="500"/>
        <Card img="https://cookiesandcups.com/wp-content/uploads/2012/12/browniepudding-3.jpg"title="Browne" cal="100"/>
        <Card img="https://cdn.theculturetrip.com/wp-content/uploads/2016/04/pani_puri1.jpg"title="Pani puri" cal="10"/> */}
         {
         obj.map((item,index)=>
         <Card img={item.img} title={item.title} cal={item.cal} />
         )
         }
        </div>
    )
}

function App(){
    return(
        <div className="app">
        <Instruction />
        <h1>Calorie Read Only</h1>
        <Cards />
        </div>
    )
}


function Instruction(){
    return(
        <div className="ins">
        <h1>Instructions</h1>
        <ul>
            <li>build a container</li>
            <li>create a seperate function and use it as a component</li>
            <li>pass props "calory and food" and call it to main component</li>
        </ul>

       
        </div>
    )
}
export default App