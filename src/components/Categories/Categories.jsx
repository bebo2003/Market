import React, { useEffect, useState } from 'react'

import NewCategories from '../Home/components/NewCategories/NewCategories'

export default function Categories() {
    const[count,useCount]=useState(0)
  return (
    <>
    <NewCategories/>
    </>
  )
}
