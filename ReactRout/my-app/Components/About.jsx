import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="flex w-1/2 flex-col">
      <Link className='bg-red text-2xl mb-3 hover:bg-red-400' to="/">John</Link>
      <Link className='bg-red text-2xl mb-3 hover:bg-red-400' to="/">Anant</Link>
      <Link className='bg-red text-2xl mb-3 hover:bg-red-400' to="/">Anubhav</Link>
    </div>
  )
}

export default About