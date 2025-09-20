import React, { useState } from 'react'

function States2() {
  // const [val,setVal]=React.useState({name:"anant",age :24});

  
  // const [val,setVal]=useState(["anant","ajit","deepak","dileep","ankesh","monish","Abhisek","Anoop"]);

  const [val,setVal]=useState([
    {name:"anant",age:24},
    {name:"ajit",age:25},
    {name:"deepak",age:26},
  ])
  return (
    <>
    {/* //use state state ko turant update nahi karta ,vo usestate state ko update karta hai apne hisaab se function completion ke badd to fix performace kssues */}
    {/* <button onClick={()=>{
      seVal({...val,gender:"male"});
      console.log(val);
    }}></button> */}
    

    <div className="p-5 bg-green-300">
      {val.map((elem=> <h1>{elem}</h1>))}
    </div>
    <button onClick={()=>setVal(()=>{
      return val.filter((item,index)=> index!=val.length-1)
    })} className="p-2 m-2 bg-blue-600 rounded-full text-white">Remove</button>
    {/* dekho  filter kya karege vo ke naya array return k  rega jisme se humne last element ko hata diya hai or vo setVal ke ander set kar diya hai
    ithi button pe click karne se last element remove ho jayega
     */}   
     
    
    </>
  )
}

export default States2