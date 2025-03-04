import React, { useEffect, useState } from 'react'

import loader from '../../../assets/images/Blocks@1x-1.0s-200px-200px.gif'
export default function Loader() {
    
  return (
    <div className='flex justify-center'>
      
      <img src={loader} alt="" />
    </div>
  )
}
