'use client'
import React from 'react'
import Login from '../login/page'
import { useState } from 'react';
import Signup from '../signup/page';
import Header from '../components/Header/Header';

const Restaurent = () => {
    const [login,setLogin]= useState(true)
  return (
    <>
    <Header></Header>
    {
        login?<Login></Login>:<Signup></Signup>
    }
    </>
  )
}

export default Restaurent
