import { useEffect } from "react";
import axios from "axios";
import Router from "next/router";



// logout--> we send the refresh token to a blacklist

export default function Logout(){
useEffect(()=>{
    
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    axios.defaults.headers['Authorization'] = null;
    
    localStorage.removeItem("login")
    Router.push('/Login')
  });

  return <div>Logout</div>
}