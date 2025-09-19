import React from 'react'

function Card() {
  const data =[
    {image:"https://plus.unsplash.com/premium_photo-1757109141202-9424dea6782b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",name:"brush",description:"npm install -D tailwindcss postcs",instock:true},
    {image:"https://images.unsplash.com/photo-1756707106632-01149ea21183?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",name:"tooth",description:"NOthing but a good one",instock:false},
    {image:"https://images.unsplash.com/photo-1757532128043-5f52ebb172db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",name:"bag",description:"very nice to take otu from this",instock:true},
    {image:"https://plus.unsplash.com/premium_photo-1756825219790-fc870171cbe4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",name:"lens",description:" why you are taking it this is for home",instock:false}
  ]
  return (
    <>
    
  <div className="w-full h-50  bg-zinc-100 flex flex-row justify-start items-center overflow-hidden rounded-xl shadow-md">

{data.map((elem, index) => (
  <div 
    key={index} 
    className="w-60 bg-zinc-100 flex flex-col justify-start items-center overflow-hidden rounded-xl shadow-md m-5"
  >
    {/* Image */}
    <div className="w-full h-32 bg-zinc-300">
      <img
        src={elem.image}  alt={elem.title || "Amazon Product"} className="w-full h-full object-cover" />
    </div>

    {/* Content */}
    <div className="w-full px-3 py-4 bg-red-400">
      <h2 className="text-lg font-semibold text-white">{elem.name}</h2>
      <p className="text-xs mt-3 bg-red-600 text-white p-2 rounded-md">
        {elem.description}
      </p>
      <button className={`px-4 py-1 ${elem.instock?"bg-blue-500":"bg-black-500"} text-xs rounded-full mt-3`}>
        {elem.instock?"In stock":"out of stock"}
      </button>
    </div>
  </div>
))}

</div>

      
    </>
  )
}

export default Card