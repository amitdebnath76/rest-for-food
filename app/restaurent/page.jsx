'use client'
import React from 'react'
import Login from '../_components/login/login'
import { useState } from 'react';
import Signup from '../_components/signup/signup';

const Restaurent = () => {
    const [login,setLogin]= useState(true)
  return (
    <>
    {
        login?<Login></Login>:<Signup></Signup>
    }
    </>
  )
}

export default Restaurent
