import Cookies from 'js-cookie'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialValues={
  id:0,
  email:"",
  firstName:"",
  lastName:"",
  roleId:0,
  role:"",
  password:"",
}

const initialstate = {
  setUser:()=>{},
  user:initialValues,
  Signout: ()=>{},
}
export const AuthContext = createContext(initialstate) 

export const AuthWrapper = ({children})=>{
  const [userData,setUserdata]=useState();
  const navigate = useNavigate()

    const setUser = (data)=>{
      // console.log("data",data)
      console.log("insetUser")
      Cookies.set("userInfo",JSON.stringify(data));
      console.log(data)
      setUserdata(data);

    }
    useEffect(()=>{
      const data = JSON.parse(Cookies.get("userInfo")) || initialValues
      console.log(data)
      // console.log(data,"data")
      if(!data){
        setUserdata(initialValues);
        navigate("/login")
      }

      setUserdata(data)
    },[])

    const Signout = () =>{
      Cookies.remove("userInfo");
      console.log("sign out")
      setUserdata(initialValues);
      navigate("/login")
    }


    // console.log("user",userData)

    let values={
      setUser,
      userData,
      Signout
    }
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
  }

  export const useAuthContext = () => {
    return useContext(AuthContext);
  };