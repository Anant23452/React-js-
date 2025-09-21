
import React from 'react';
import Navbar from "./Component/Navbar";
import Hero from  "./Component/Hero";
import About from "./Component/About";
import Card from "./Component/Card";
import Song from "./Component/Song";
import State from "./Component/States";
import States2 from "./Component/States2";
import ImageCard from "./Component/ImageCard";
import Props from "./Component/Props";
import PropsPractice from "./Component/PropsPractice";


//make function name in capital letter
function App(){
  // const arr=["anant","ajit","deepak","dileep","ankesh","monish","Abhisek","Anoop"];

  //props ke liye hai 
   const app=[
    {name:"Anant",course:"MCA",image:"https://images.unsplash.com/photo-1758380742154-44738eb92832?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Ajit",course:"BCA",image:"https://i.pinimg.com/736x/c8/96/dc/c896dc6b5f32dc59a75d4f8354e518db.jpg"},
    {name:"Deepak",course:"B.Tech",image:"https://i.pinimg.com/736x/dd/cd/70/ddcd70b0982c7818456f8a62dfe740c8.jpg"},
    {name:"Dileep",course:"MBA",image:"https://i.pinimg.com/736x/7a/46/c9/7a46c93d08199b4fd4a8dd5f17f1dc5a.jpg"},
  ]
  return (
    <>
    {/* <div>
      {arr.map((elem,index)=>(
        <div key={index} className="px-3 py-4  bg-zinc-400  rounded-md w-fit">
          {elem}
        </div>
      ))} 
    </div> */}
    {/* <Card/> */}
    {/* <Song/>  */}
    {/* <State/>  */}
    {/* <States2/> */}
    {/* < ImageCard/> */}
    {/* <Props chacha="Know more" color="bg-blue-600"  />
    <Props chacha="Download" color="bg-red-600" /> */}
    <div className="w-screen h-screen bg-zinc-400 flex gap-4 items-center justify-center">

    {app.map((elem,index)=>(
      <PropsPractice image={elem.image} course ={elem.course} name={elem.name} />
    ))}
    </div>
    
    </>
  );

  

}
export default App