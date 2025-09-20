import React, { useState } from 'react'

function States() {
    //har samay array me hota hai
    const[score,setScore]=useState(0);
    const[banned,setbanned]=useState(false);
  return (
    < >
    <h1 className='flex justify-center items-center w-40 h-40 bg-pink-500'>
        {score}
      
    </h1>
    <h1>  {banned.toString()}</h1>
    {/* <button onClick={()=>{setScore(10)}} className="m-2 p-2 rounded-half bg-blue-600 ">change</button> */}
    <button onClick={()=>{setScore((prev)=>prev+1)}} className="px-3 m-2 p-2 rounded-full bg-blue-600 ">change</button>
    <button
  onClick={() => setbanned(!banned)}
  className={`px-3 m-2 p-2 rounded-full ${
    banned ? "bg-red-500 text-white" : "bg-green-500 text-black"
  }`}
>
  
</button>
   
    
    </>
  )
}

export default States