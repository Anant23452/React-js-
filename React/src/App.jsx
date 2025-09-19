
import React from 'react';
import Navbar from "./Component/Navbar";
import Hero from  "./Component/Hero";
import About from "./Component/About";
import Card from "./Component/Card";
import Song from "./Component/Song";
import State from "./Component/States";


//make function name in capital letter
function App(){
  // const arr=["anant","ajit","deepak","dileep","ankesh","monish","Abhisek","Anoop"];
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
    {/* <Song/> */}
    <State/>
    </>
  );

  

}
export default App