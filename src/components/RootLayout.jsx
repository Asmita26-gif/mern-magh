import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from '../assets/pages/Home/Footer'


export default function RootLayout() {
  return (
    <div>
      <Header />

      <Outlet />


    </div>
  )
}
