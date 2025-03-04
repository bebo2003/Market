import axios from "axios";


export let orderContext  = createContext()

 export default function OrderContextProvider({children}){

    
async function getUserOrders(userId){


    
    let {data} = await axios.get(`${api_url}/user/${userId}`);
       
  
        

return data;
}

    return <orderContext.Provider value={{cashOrder,onlineOrder,getUserOrders}}>
{children}

    </orderContext.Provider>

}