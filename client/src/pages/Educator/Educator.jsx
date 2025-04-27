import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/Educator/NavBar'
import SideBar from '../../components/Educator/SideBar'
import Footer from '../../components/Educator/Footer'


const Educator = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <NavBar/>
      <div className='flex'>
        <SideBar/>
        <div className='flex-1'>
          {<Outlet/>}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Educator
