import { useState,useEffect } from 'react';
import './App.css';
import React  from 'react';


function Template({templates,setMEme}){
return(
  <div className="templates">
     {templates.map(template=>(
     
     <div key={template.id} className="template" onClick={()=>{
       setMEme(template)
     }}>
     <div className="image" ><img src={template.url} alt="not get"></img></div>
       {template.name}</div>
   ))}
  </div>
)
}

function Meme({meme,setMeme}){
 const [form,setForm]=useState({
   template_id:meme.id,
   username:"TanishaMangal",
   password:"121298#PARAS",
   boxes:[]
 })
 const generateMemme=()=>{
   let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
   form.boxes.map((box,index)=>{
    url+=`&boxes[${index}][text]=${box.text}`
    
   }); 
   console.log(url)

   fetch(url)
   .then((res)=>res.json())
   .then((data)=>(
     console.log(data)
     
   ))
  
 }
  return(
    <div className="meme">
    <img src={meme.url} alt="hk"></img>
    <div className="input">
      {[...Array(meme.box_count)].map((el,index)=>(
        <input 
        key={index}
        type="text" placeholder={`caption${index}`} 
        onChange={(e)=>{
        
          const newboxes=form.boxes;
          newboxes[index]={text:e.target.value}
          setForm({...form,boxes:newboxes})
        }}></input>
            ))}
 </div>
 <div>
      <button onClick={generateMemme}>create meme</button>
      <button onClick={()=>{
        setMeme(null)
      }}>choose template</button>
      </div>
  </div>
  )

}

function App() {
  const[templates,setTemplates]=useState([]);
  const[meme,setMeme]=useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((res)=>res.json())
    .then((data)=>{setTemplates(data.data.memes)});
  },[])

    return (
    <div className="App">
    <h1>MEME GENERATOR</h1>
    {meme===null?<Template templates={templates} setMEme={setMeme}/>:<Meme meme={meme} setMeme={setMeme}/>}
    </div>
  );
}

export default App;
