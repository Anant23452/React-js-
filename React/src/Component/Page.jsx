import React from 'react'

function Page () {
  return (
    <div className=' mt-10 flex justify-center   '>
      <form action=""className='flex gap-5 flex-col ' >
          <input className='rounded-md px-2 py-1 text-base font-semibold outline-none  type="text"' placeholder='Name' />
        <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='email' />
        <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='web' />
        <input className='bg-red-400' type="button" value="Submit" />
      </form>
    </div>
  )
}

export default Page