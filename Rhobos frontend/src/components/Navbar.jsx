import React from 'react'
import logo from '../../public/Lybrate-Logo.webp'

function Navbar() {
  return (
    <div className='flex px-4  justify-between h-14  items-center' >
        <div className='w-1/5 h-full flex justify-center py-1'>
      <img src={logo} alt="" className='w-24 h-9' /></div>
      <div className='flex w-2/5 justify-between text-sm text-gray-500 items-center mr-4 font-semibold'>
        <h1>Get the App</h1>
        <h1>For Doctors</h1>
        <button className='text-red-600 border border-red-600 rounded px-2 py-1 font-semibold'>Book Free Appointment</button>
        <h1>Login/Signup</h1>
      </div>
    </div>
  )
}

export default Navbar
