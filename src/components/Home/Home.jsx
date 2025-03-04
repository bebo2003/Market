import React, { useEffect, useState } from 'react'
import styles from "./Home.module.css"
import RecentProducts from './components/RecentProducts/RecentProducts'
import PopularCategory from './components/PopularCategories/PopularCategories'
import StaticSlider from '../StaticSlider/StaticSlider'


export default function Home() {
    const[counr,useCount]=useState(0)


  return (
    <div>
      <StaticSlider/>
      <PopularCategory/>
     
    <RecentProducts/>
      
      </div>
  )
}
