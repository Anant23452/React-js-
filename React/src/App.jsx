import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Card from "./Component/Card";
import Song from "./Component/Song";
import State from "./Component/States";
import States2 from "./Component/States2";
import ImageCard from "./Component/ImageCard";
import Props from "./Component/Props";
import PropsPractice from "./Component/PropsPractice";
import ProjectOne from "./Component/ProjectOne";
import Form from "./Component/Form";
import FormTwo from "./Component/FormTwo";

//make function name in capital letter
function App() {
  // const arr=["anant","ajit","deepak","dileep","ankesh","monish","Abhisek","Anoop"];

  //props ke liye hai
  //  const app=[
  //   {name:"Anant",course:"MCA",image:"https://images.unsplash.com/photo-1758380742154-44738eb92832?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",freinds:false},
  //   {name:"Ajit",course:"BCA",image:"https://i.pinimg.com/736x/c8/96/dc/c896dc6b5f32dc59a75d4f8354e518db.jpg",freinds:false},
  //   {name:"Deepak",course:"B.Tech",image:"https://i.pinimg.com/736x/dd/cd/70/ddcd70b0982c7818456f8a62dfe740c8.jpg",freinds:false},
  //   {name:"Dileep",course:"MBA",image:"https://i.pinimg.com/736x/7a/46/c9/7a46c93d08199b4fd4a8dd5f17f1dc5a.jpg",freinds:false},
  // ];

  // const [data,setData]=useState(app);

  // data ko palatne ka function
  // const handledata=(changingIndex)=>{
  //   setData((prev)=>{
  //     return prev.map((item,index)=>{
  //       if(index===changingIndex){
  //         return {...item,freinds:!item.freinds};
  //       }
  //       return item;
  //     });
  //   })
  // }

  // console.log(data);


const data=[
  {song:"Kesariya",artist:"Arijit Singh",image:"https://i.pinimg.com/1200x/de/51/34/de51343937840d07ca11216889a8d2ee.jpg",added:false},
  {song:"Leja Re",artist:"Dhvani Bhand",image:"https://i.pinimg.com/1200x/78/34/55/7834559a5068156c195109f310372621.jpg",added:false},
  {song:"Raatan Lambiyan",artist:"Tanishk Bagchi",image:"https://i.pinimg.com/1200x/41/c6/c9/41c6c97b52b01573a1b3a071cd6eb055.jpg",added:false},
  {song:"Titliaan",artist:"Afsana Khan",image:"https://i.pinimg.com/736x/89/0d/51/890d51d786babc4a7c196f5b14d09ac4.jpg",added:false},
  {song:"Maan Meri Jaan",artist:"King",image:"https://i.pinimg.com/736x/d9/f0/67/d9f06726c045d37e0d144b1e2c7fbc73.jpg",added:true},
];

// Har samay data to state me dalo kyuki react only rect when state changes
const [songs,setSongs]=useState(data);
const handleclick=(index)=>{
  console.log(index);
  setSongs((prev)=>{
    return prev.map((item, idx) => {
      if(idx===index){
        return{...item,added:!item.added};
      }
      return item;
    });
  })

}


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
      <div className="w-screen h-screen bg-zinc-400 flex justify-center items-center">
        {/* Two method for same thing  */}

        {/* <Navbar index={songs.filter((song)=>song.added).length} /> */}
        {/* <Navbar data={songs} />2
        <div className="px-10 flex gap-3 mt-10 flex-wrap">

        {songs.map((elem,index)=>{
          return  <ProjectOne data={elem}  key={index} index={index} handleclick={handleclick} /> 
        })}
        </div> */}

        {/* {data.map((elem, index) => (
          <PropsPractice
            key={index}
            index={index}
            handledata={handledata}
            values={elem}
          />
        ))} */}

          {/* < Form /> */}
          {/* < FormTwo /> */}


          {/* making project 
           */}
           <div className="container mx-auto"></div>










      </div>
    </>
  );
}
export default App;
