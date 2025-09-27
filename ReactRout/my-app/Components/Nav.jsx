import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
          <nav className="mt-10 flex justify-around bg-black text-white p-5">
      <NavLink style={(e)=>{console.log(e)}}  to="/">Home</NavLink>
      <NavLink style={()=>{}} to="/user">User</NavLink>
      <NavLink style={()=>{}} to="/about">About</NavLink>
    </nav>
    </div>
  )
}

export default Nav