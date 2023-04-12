import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
const Rootlayout = () => {
  return (
    <>
        <Navbar/>
        <div className='mt-2 mb-2'>
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Rootlayout