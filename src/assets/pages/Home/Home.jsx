import React from 'react'
import Header from '../../../components/Header'
import { NavLink, Outlet } from 'react-router'

export default function Home() {
  return (
    <div>
      <Header />




      <Outlet />
    </div>
  )
}
