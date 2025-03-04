// just for all pages wihout login and register
    
import { Navigate } from "react-router-dom"

export default function ProtectedRoutes(props){
if(localStorage.getItem("userToken")){
    return props.children
}else{
    return <Navigate to={'/login'}/>
}
}