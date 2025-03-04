
//  just for login page and register page 

import { Navigate } from "react-router-dom";



 export default function AuthView(props){


    if(localStorage.getItem("userToken")){
        
    return <Navigate to= {'/home'}/>
    }
    else{
        return props.children
    }

}