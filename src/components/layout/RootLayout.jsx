import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Search from '../search/Search'

function RootLayout() {
  return (
<div className="flex min-h-screen flex-col justify-between ">
<div>
    <Header />
<Search />
</div>
<Outlet />
<Footer />
</div>
  )
}

export default RootLayout