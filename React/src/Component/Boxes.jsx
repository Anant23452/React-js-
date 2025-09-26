import React from 'react'
import Box from "./Box";

function Boxes({users}) {
  return (
    <div className='w-full max-h-72 overflow-auto  p-5 flex gap-4 justify-center flex-wrap '>
        <Box users={users} />
      
    </div>
  )
}

export default Boxes