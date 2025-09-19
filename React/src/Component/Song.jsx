import React from 'react'

function Song() {
    const data=[
        {name:"Mar jana ",description:"why do they not like it"},
        {name:"Kaha ho tum ",description:"You can also see it"},
        {name:"Meri Bheegi palko ",description:"Old is gold"},
    ]
    // click handle ko render karne ke liye 
    const handleonclick=()=>{alert("Download nahi ho sakta")};
    
  return (
    <div className='w-screen h-screen bg-zinc-200 flex flex-col gap-10 items-center justify-center'>
{
    data.map((elem,index)=>(
         <div key={index} className="w-60 px-3 py-3 bg-green-400 rounded ">
            <h3 className='font-semibold text-xl'>{elem.name}</h3>
            <p className='text-xs mt-2'>{elem.description}</p>
            <button onClick={handleonclick} className='px-1 py-1 my-2 bg-blue-500 rounded '>Download Now</button>
        </div>
       ))    
}
    </div>
  )
}

export default Song