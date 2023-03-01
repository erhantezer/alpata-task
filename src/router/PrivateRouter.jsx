import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const currentUser = JSON.parse(sessionStorage.getItem("user"))
  console.log(currentUser)
  // if(currentUser) {
  //   console.log(window.atob(currentUser.password))
    
  // }else {
  //   console.log("user yok")
  // }
  return currentUser ? <Outlet /> : <Navigate to="/" replace />
}

export default PrivateRouter