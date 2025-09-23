import React from 'react'

//Agar kabhi bhi form submit karte ho to form automatically refresh ho jata hai
//To uske liye hume ek function banana padta hai jisme event ko pass karte hai
//Aur fir event.preventDefault() kar dete hai

function Form() {
  return (
    <div className='bg-zinc-300 py-5 px-3'>
        <input type="Name" placeholder='name' />
    </div>
  )
}

export default Form