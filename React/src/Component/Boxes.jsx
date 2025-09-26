import React from 'react'
import Box from "./Box";

function Boxes() {
  return (
    <div className='w-full max-h-72 overflow-auto bg-blue-500 p-5 flex gap-4 justify-center flex-wrap '>
        <Box/>
      
    </div>
  )
}

export default Boxes