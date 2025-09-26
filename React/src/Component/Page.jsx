import React from 'react'

function Page () {
  return (
    <div className=' mt-10 flex justify-center   '>
      <form action=""className='flex gap-5 flex-col ' >
          <input className='rounded-md px-2 py-1 text-base font-semibold outline-none  type="text"' placeholder='Name' />
        <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='email' />
        <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Image Url' />
        <input className='bg-red-900 px-2 py-1 rounded-md' type="button" value="Submit" />
      </form>
    </div>
  )
}

export default Page