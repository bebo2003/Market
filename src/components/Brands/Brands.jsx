import React, { useEffect, useState } from 'react'
import styles from "./Brands.module.css"
import NewBrands from '../NewBrands/NewBrands'


export default function Brands() {
     
    const[counr,useCount]=useState(0)


  return (
 <>
<NewBrands/>
 </>
    
  )
}
