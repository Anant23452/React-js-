import React from 'react'

function ProjectOne({data}) {
  // kya bahar nikalna hia 
  const{song,artist,image,added}=data;
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative">
      <div className="w-20 h-20 bg-orange-500 rounded-md"> 
       < img src={image} alt={song} className="w-full h-full object-cover rounded-md"/>
      </div>
        <div className="text-black">
          <h3 className='text-xl leading-none font-semibold'>{song} </h3>
          <h5>{artist} </h5>
        </div>
        <button className="px-3 py-2 bg-blue-600 text-white-100 rounded-full text-xs absolute bottom-5  -translate-y-[-50%] -translate-x-[-50%]">{added==false?"Click to Favorite":"Remove from favorite"}</button>
    </div>
  )
}

export default ProjectOne