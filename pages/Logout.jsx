import { useEffect } from "react";
import axios from "axios";
import Router from "next/router";



// logout--> we send the refresh token to a blacklist

export default function Logout(){
useEffect(()=>{
    const response = axios.post('http://127.0.0.1:8000/api/logout/blacklist', {
      refresh_token: localStorage.getItem('refresh_token'),
    });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    axios.defaults.headers['Authorization'] = null;
    Router.push('/Login')
  });

  return <div>Logout</div>
}