import React from 'react'

//Agar kabhi bhi form submit karte ho to form automatically refresh ho jata hai
//To uske liye hume ek function banana padta hai jisme event ko pass karte hai
//Aur fir event.preventDefault() kar dete hai

//method
//1. Controlled Component
//2. Uncontrolled Component
//3.REact Hook Form
//4.useRef Hook

//useRef = is tareeke me hum har input ko select kar lete hai and unki value tab nikalte hai jab form submit hota hai


//Controlled Component
//Jab hum form ke input ko react state ke through control karte hai to use controlled component kehte hai
//Yaha pe hum har ek input field ke liye ek state banate hai aur uske value ko state se bind karte hai
//Aur jab bhi input change hota hai to hum state ko update karte hai

function Form() {
  return (
    <div className='bg-zinc-300 py-5 px-3'>
        <input type="Name" placeholder='name' />
    </div>
  )
}

export default Form