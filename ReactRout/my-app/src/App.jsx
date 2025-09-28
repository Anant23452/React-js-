import { useEffect, useState } from 'react'
import './App.css'
import Nav from '../Components/Nav';
import  Routing from '../utils/Routing';
import axios from 'axios';
import Axios from '../utils/Axios';

function App() {
  const [products,setProducts]=useState([])

  ///useEffect- ise get product me jitna bhi hai vo home page pr load hote hi show kr dega


   useEffect(()=>{
    getproducts();
   },[])


  //Api Handling 

  const getproducts=()=>{
    const api ="https://fakestoreapi.com/products";


    axios.get(api).then((products)=>{
      console.log(products);
      setProducts(products.data)
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

console.log(products);
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
   {
    products.length>0 ?(
      products.map((p)=>(
        <li key={p.id} className='m-5 p-5 border-2  border-blue-400 rounded-lg shadow-lg'>
         {p.title} </li>
      )
    )
    ):<h1 className='text-center text-3xl font-bold'>No Products</h1>
  
   }
  </ul>

    

    </>
  )
}

export default App
