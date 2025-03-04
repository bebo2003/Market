import React, { useEffect, useState } from 'react'
import styles from "./NotFound.module.css"
import notFoundImage from '../../assets/images/error.svg'
export default function NotFound() {
    const[counr,useCount]=useState(0)
  return (
    <div>
      
      
      <div className='container'>
        <img src={notFoundImage} className='w-full' alt="" />
      </div>
      
      </div>
  )
}
