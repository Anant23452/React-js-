import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
          <nav className="mt-10 flex justify-around bg-black text-white p-5">
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/about">About</Link>
    </nav>
    </div>
  )
}

export default Nav