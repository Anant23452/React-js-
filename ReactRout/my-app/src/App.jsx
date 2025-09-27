import { useState } from 'react'
import './App.css'
import Nav from '../Components/Nav';
import  Routing from '../utils/Routing';
import axios from 'axios';


function App() {
  //Api Handling 
  const getproducts=()=>{
    const api ="https://fakestoreapi.com/products";


    axios.get(api).then((product)=>{
      console.log(product);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const addproducts=()=>{
    const api ="https://fakestoreapi.com/products";


    axios.post(api,{

      title:"test product",
      price:13.5,
      description:"lorem ipsum set",
      image:"https://i.pravatar.cc",
      category:"electronic"


    }).then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  return (
    <>

  <Nav/>
  <Routing/>
  <div className="pt-5 bg-blue-500 flex gap-5 justify-center"> 
    <button onClick={getproducts}className='rounded px-5 py-2 bg-red-400' >Click for get product</button>
    <button onClick={addproducts}className='rounded px-5 py-2 bg-red-400' >Click for add product</button>
  </div>
  <hr className="w-full h-1 my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700" />
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>

    

    </>
  )
}

export default App
