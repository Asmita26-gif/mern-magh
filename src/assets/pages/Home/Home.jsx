import React from 'react'
import Header from '../../../components/Header'
import { NavLink, Outlet } from 'react-router'
import Intro from './Intro'
import Tech from './tech'
import Info from './Info'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Intro />
      <Tech />
      <Info />
      <Footer />

    </div>
  )
}
