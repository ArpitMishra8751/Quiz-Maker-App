import React from 'react'
import {  NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className=' bg-orange-500 w-full rounded-lg text-black ' >
      <nav className='flex justify-between item-center mx-auto max-w-6xl h-14 py-4  ' >
        
        <div className='mx-10' >
        <NavLink to="/">Home</NavLink>
        </div>
        <div className=' mx-10 px-2 gap-x-10 ' >
        <NavLink to="/create-quiz" className='mx-4' >Create-Quiz</NavLink>
        <NavLink to="/quiz">Give-Quiz</NavLink>   
        </div> 
        </nav> 
    </div>
  )
}
export default Navbar