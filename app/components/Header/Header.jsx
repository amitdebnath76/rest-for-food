'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const Header = () => {
  const router = useRouter()
  const [details,setDetails]= useState()
  const pathName = usePathname()

  useEffect(()=>{
    let data = localStorage.getItem('restaurentUser');
    if(!data && pathName ==='/restaurent/Dashboard'){
      router.push('/restaurent')
    }else if(data && pathName==='/restaurent'){
        router.push('/restaurent/Dashboard')
    }else{
      setDetails(JSON.parse(data))
    }
  },[router,pathName])

  const handelLogOut =()=>{
    localStorage.removeItem('restaurentUser')
    router.push('/restaurent')
  }
  return (
    <>
    <div className='flex items-center justify-between px-14'>
    <div>
       <Link href='/'> <Image height={150} width={150} alt='app-logo' src='/food-delivery-logo.jpg'></Image></Link>
    </div>
    <div>
        <ul className='flex justify-around gap-7 text-2xl text-blue-600'>
            <li className=' hover:text-green-600 duration-300'>Home</li>
            {
              details && details.name?<>
              <button><li onClick={handelLogOut} className=' hover:text-green-600'>LogOut</li></button>
              <li className=' hover:text-green-600'>Profile</li>
              </>:
              <li className=' hover:text-green-600'>Login/SignUp</li>
            }
            
            

        </ul>
    </div>
    </div>
    </>
  )
}

export default Header