



import React from 'react'
import Navbar from './shared/Navbar'
import { Outlet } from 'react-router'


function App() {
  return (
    <div>
      <Navbar/>
   
      <Outlet/>
      
    </div>
  )
}

export default App
