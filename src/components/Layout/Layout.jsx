import React, { useEffect, useState } from 'react'
import styles from "./Layout.module.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    const[counr,useCount]=useState(0)
  return (
    <>
<Navbar/>
<Outlet/>
<Footer/>
    </>
  )
}
