import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='flex items-center justify-between px-14'>
    <div>
       <Link href='/'> <Image height={150} width={150} alt='app-logo' src='/food-delivery-logo.jpg'></Image></Link>
    </div>
    <div>
        <ul className='flex justify-around gap-7 text-2xl text-blue-600'>
            <li className=' hover:text-green-600 duration-300'>Home</li>
            <li className=' hover:text-green-600'>Login/SignUp</li>
            <li className=' hover:text-green-600'>Profile</li>

        </ul>
    </div>
    </div>
    </>
  )
}

export default Header