import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function RootLayout() {
  return (
<div className="flex min-h-screen flex-col justify-between ">
      <div>
          <Header />
      </div>
    <Outlet />
          <Footer />
  </div>
  )
}

export default RootLayout