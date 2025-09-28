import React, { useState } from 'react'

function Context(props) {
    const[user,setUser]=useState([
        {name:"Aman",email:"aman@gmail"},
        {name:"Ankit",email:"ankita@gmail"},
        {name:"Sumit",email:"sumit@gmail"},
        {name:"Rohit",email:"rohit@gmail"},
    ])

   const UserContext=React.createContext();
    
    console.log(props);
  return <UserContext.Provider value={{users,setUser}}>  { props.children}  </UserContext.Provider>
   
  
}

export default Context