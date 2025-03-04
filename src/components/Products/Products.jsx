import React, { useContext, useEffect, useState } from 'react'
import styles from "./Products.module.css"
import { counterContext } from '../../Context/counterContext'
import RecentProducts from '../Home/components/RecentProducts/RecentProducts'
export default function Products() {
   
    
  return (
    <>
    <RecentProducts/>
    </>
  )
}
