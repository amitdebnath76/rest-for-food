'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Signup = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [c_password,setC_pasword] = useState('')
  const [name,setName] = useState('')
  const [city,setCity] = useState('')
  const [address,setAddress] = useState('')
  const [contact,setContact] = useState('')

const handelSignUp = ()=>{
  console.log(email,password,c_password,name,city,address,contact)
}

  return (
    <>
    <div className="hero bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up Please!</h1>
      <p className="py-6">
       Already Have an Account? 
       <span><Link href='/login' className=' text-blue-700 text-2xl font-extrabold'>Log In</Link></span>
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input value={email} name='email' type="email" placeholder="email" className="input input-bordered" required 
          onChange={(event)=>setEmail(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input value={password} name='password' type="password" placeholder="password" className="input input-bordered" required 
          onChange={(event)=>setPassword(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input value={c_password} name='confirm-password' type="password" placeholder="Confirm Password" className="input input-bordered" required 
          onChange={(event)=>setC_pasword(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Restaurent Name</span>
          </label>
          <input value={name} type="text" placeholder="Restaurent Name" className="input input-bordered" required 
          onChange={(event)=>setName(event.target.value)}
          
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter city</span>
          </label>
          <input value={city} name='city-name' type="text" placeholder="City Name" className="input input-bordered" required 
          onChange={(event)=>setCity(event.target.value)}
          
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Full Address</span>
          </label>
          <input value={address} name='full-address' type="text" placeholder="Full Address" className="input input-bordered" required 
          onChange={(event)=>setAddress(event.target.value)}
          
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Contact Number</span>
          </label>
          <input value={contact} name='contact-number' type="text" placeholder="Contact Number" className="input input-bordered" required 
          onChange={(event)=>setContact(event.target.value)}
          
          />
        </div>
        <div className="form-control mt-6">
          <button onClick={handelSignUp} className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default Signup