import React from 'react'
import Home from '../Components/Home'
import User from '../Components/User'
import About from '../Components/About'
import Student from '../Components/Student'
import { Route, Routes } from 'react-router-dom'

function Routing() {
  return (
    
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/user' element={<User/>}></Route>
    <Route path='/Student' element={<Student/>}></Route>
    <Route path='/about' element={<About/>}></Route>


    </Routes>
   
  )
}

export default Routing