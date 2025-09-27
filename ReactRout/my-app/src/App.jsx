import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../Components/Home'
import User from '../Components/User'
import About from '../Components/About'


function App() {


  return (
    <>
  

    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/user' element={<User/>}></Route>
    <Route path='/about' element={<About/>}></Route>


    </Routes>
   
    

    </>
  )
}

export default App
