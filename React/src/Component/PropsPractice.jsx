import React from 'react'

function PropsPractice({image,course,name}) {
 
  return (
    <div className='w-60 bg-zinc-200'>
      <div className="w-full h-40 bg-sky-400">
        <img src={image} alt="nothing" className='w-full h-full object-cover' />
      </div>
        <div className="w-full p-3 text-black">
          <h3>{name}</h3>
          <h3>{course} </h3>
          <button onClick={()=>alert("Adding as a friend")} className="mt-3 bg-blue-700 text-white">Click</button>
        </div>
      
    </div>
  )
}

export default PropsPractice