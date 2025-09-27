import React, { useEffect, useState } from 'react'

function User() {
  const [First,setFirst]=useState("This is normal data");
  const [Second,setSecond]=useState("This is Big data");

  useEffect(()=>{
   console.log("Going on user page");

   return()=>{
    console.log("Leaving user page");
   }
  })
  return (
    <div>User</div>
  )
}

export default User