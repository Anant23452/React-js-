import React from 'react'

function PropsPractice({values,index,handledata}) {
 
  return (
    <div className='w-60 bg-zinc-200'>
      <div className="w-full h-40 bg-sky-400">
        <img src={values.image} alt="nothing" className='w-full h-full object-cover' />
      </div>
        <div className="w-full p-3 text-black">
          <h3>{values.name}</h3>
          <h3>{values.course} </h3>
          <button onClick={()=> handledata(index)} className="mt-3 bg-blue-700 text-white">{values.freinds===true?"Friends":"Add friends"}</button>
        </div>
      
    </div>
  )
}

export default PropsPractice