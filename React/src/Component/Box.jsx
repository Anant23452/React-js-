import React from 'react'


function Box() {
  return (
    <div className='w-[16vw] h-[45vh] bg-zinc-300 flex flex-col justify-start items-center gap-5 rounded-md text-black '>
        <div className="image w-[2vw] h-5 rounded-full bg-blue-700  text-black"> </div>
            <h1 className='text-center ' >Anant</h1>
            <p className="text-xs opacity-50 ">anant@000</p>
            <p className=' text-xs leading-1 tracking-tight text-center font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, sunt?</p>
            <button className='px-3 py-2 bg-blue-600 rounded-md text-white font-semibold mb-2'>Remove</button>
            
       


    </div>
  )
}

export default Box