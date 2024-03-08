import React from 'react'
import {Outlet} from 'react-router-dom'
import backgroundImage from '../../public/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg'

function Authentication() {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <div className='flex justify-center items-center h-screen' style={backgroundStyle}>
      <Outlet/>
    </div>
  )
}

export default Authentication
