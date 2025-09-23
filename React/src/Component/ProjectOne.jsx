import React from 'react'

function ProjectOne() {
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative">
      <div className="w-20 h-20 bg-orange-500 rounded-md"> </div>
        <div className="text-black">
          <h3 className='text-xl leading-none font-semibold'>Song name</h3>
          <h5>Artist name</h5>
        </div>
        <button className="px-3 py-2 bg-blue-600 text-white-100 rounded-full text-xs absolute bottom-5  -translate-y-[-50%] -translate-x-[-50%]">Click to Favorite</button>
    </div>
  )
}

export default ProjectOne