import React, { useState } from 'react'




function FormTwo() {
    const [val,setVal]=useState({name:"",email:""});
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(val);
    }

  return (
    <form action="" onSubmit={handleSubmit} className='flex flex-col justify-center items-center bg-zinc-500'>
       < input onChange={(event)=>setVal({...val,name:event.target.value})} type="text" placeholder='Enter your name' className='m-3 p-2 rounded-md'/>
         < input onChange={(event)=>setVal({...val,email:event.target.value})} type="email" placeholder='Enter your email' className='m-3 p-2 rounded-md'/>
       < button  className='bg-blue-600 text-white px-3 py-2 rounded-md m-3'>Submit</button>
    </form>
  )
}

export default FormTwo
// Third way of making form is with react hook form library