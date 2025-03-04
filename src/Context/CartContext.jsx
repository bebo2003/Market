import { createContext, useContext, useEffect, useState } from "react";
import { tokenContext } from "./tokenContext";
import axios from "axios";

export const cartContext = createContext();

export default function CartContextProvider({children}) {

    const {token}=useContext(tokenContext)
    // const[cartCount,setCartCount]=useState(0)
      const[cartDetails,setCartDetails]=useState(null)
    const[numOfCartItems,setNumOfCartItems]=useState(0);
    const[cartId,setCartId]=useState('');

    useEffect(()=>{
      token && getCart()
    },[token])

    const API_URL=`https://ecommerce.routemisr.com/api/v1/cart`;
    const ORDER_API_URL=`https://ecommerce.routemisr.com/api/v1/orders`;    
    const headers={
            token
    }
    async function addToCart(productId){
     const {data} = await axios.post(API_URL,{productId}, {
      headers

        });
        if(data.status == "success"){
          setNumOfCartItems(data.numOfCartItems)
        }
        return data;

    }



    async function getCart(){
      const {data} = await axios.get(API_URL,{
       headers
 
         });
         if(data.status == "success"){
          setNumOfCartItems(data.numOfCartItems)
        }

        setCartId(data.cartId)
        setCartDetails(data)
      
         return data;
 
     }

     async function removeProduct(id){
      const {data} = await axios.delete(`${API_URL}/${id}`,{
        headers
  
          });

        console.log(data,"EEE");
        
          if(data.status == "success"){
            setNumOfCartItems(data.numOfCartItems)
          }
         setCartDetails(data)
        return data;


     }


     async function updateCount(id,count){
      const {data} = await axios.put(`${API_URL}/${id}`,{count},{
        headers
  
          });

        console.log(data,"EEE");
        
          if(data.status == "success"){
            setNumOfCartItems(data.numOfCartItems)
          }
         setCartDetails(data)
        return data;


     }



     async function cashOnDelivery(shippingAddress){
      const {data} = await axios.post(`${ORDER_API_URL}/${cartId}`,{shippingAddress},{
        headers
  
          });
         if(data.status == "success"){
          getCart()
         }
        return data;


     }


     async function onlinePayment(shippingAddress){
      const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,{shippingAddress},{
        headers
  
          });
        //  if(data.status == "success"){
        //   getCart()
        //  }
        return data;


     }











  return (
<cartContext.Provider value={{numOfCartItems,setNumOfCartItems,addToCart,getCart,cartDetails,removeProduct,updateCount,cashOnDelivery,onlinePayment}}>
{children}
</cartContext.Provider>

  // <cartContext.Provider value={{cartCount,setCartCount,addToCart}}> 
  //   {children}
  // </cartContext.Provider>
  )
}

