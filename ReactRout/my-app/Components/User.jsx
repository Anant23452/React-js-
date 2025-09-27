import React, { useEffect, useState } from 'react'

function User() {
  const [First,setFirst]=useState("This is normal data");
  const [Second,setSecond]=useState("This is Big data");

  useEffect(()=>{
   console.log("Going on user page");

   return()=>{
    console.log("Leaving user page");
   }
  },[])
  return (
   <>
   <h1 className='text-center text-3xl font-bold'>User Component</h1>
   <hr className="w-full h-1 my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700" />
   <h1 className='text-center text-3xl font-bold'>{First} </h1>
   <button onClick={()=>setFirst("Normal data is changed")} className="bg-orange-600 p-2 rounded-md mb-2 text-white ">Change Normal Data</button>
   
   <h1 className='text-center text-3xl font-bold'>{Second} </h1>
   <button onClick={()=>setSecond("Big data is changed")} className="bg-orange-600 p-2 rounded-md mb-2 text-white ">Change Big Data</button>
   
   
   </>
  )
}

export default User