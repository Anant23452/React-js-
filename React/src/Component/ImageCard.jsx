import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";


function ImageCard() {

    const[val,setVal]= useState(false);

  return (
   <div className="w-full h-full bg-zinc-300 flex justify-center items-center">
    <div className="relative w-60 h-32 bg-zinc-500 rounded-half overflow-hidden flex">
        <img className={`transition duration-150 ease-in-out ... shrink-0 ${val===false?"-translate-x-[0%] ":"-translate-x-[100%] " } w-full h-full object-cover`} src="https://images.unsplash.com/photo-1749680920901-03fd16468019?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className={`transition duration-150 ease-in-out ... shrink-0 ${val===false?"-translate-x-[0%]":"-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1758407909328-6b46fbfc5f98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <span onClick={()=>{setVal(()=>!val)}} className='w-5 h-5 absolute bottom-0 right-0 bg-blue-600 text-white flex justify-center items-center rounded-half'>
          <FaArrowRight size={"1em"} />
        </span>
    </div>
   </div>
  )
}

export default ImageCard