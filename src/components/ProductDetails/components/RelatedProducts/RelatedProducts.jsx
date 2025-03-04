import React, { useEffect, useState } from 'react'
import styles from './RelatedProducts.module.css'
import axios from 'axios'
import ProductItem from '../../../Shared/ProductItem/ProductItem'
export default function RelatedProducts(props) {
    let[count,setCount]=useState(0)
    const [relatedProducts,setRelatedProducts]=useState([])
    let {categoryId}=props
    console.log(categoryId,"categorry");
    
    function getProducts(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        .then (({ data })=>{
        //   console.log(data.data);
          let res=data.data.filter(product => product.category._id==categoryId)
          console.log(res);
          setRelatedProducts(res)
          
        })
        .catch(err=>{
          console.log(err)
        })
        }

    useEffect(()=>{
        getProducts()
    },[])
  return (
     <div className='main-layout  mb-8' >
    {relatedProducts.map(product => <ProductItem key={product.id}      product={product}/>)}
      
            </div>
  )
}
