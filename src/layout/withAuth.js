import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom';

const withAuth = (Component) => {
    const Authentication=()=>{
    const navigate =useNavigate();
    const email = Cookies.get("auth_email");

    // console.log(email)
    useEffect(()=>{
        if(!email){
            navigate("/");
        }
    },[])
    return email?<Component/>:null;
    };
  return Authentication;
}

export default withAuth;
