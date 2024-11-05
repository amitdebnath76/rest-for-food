'use client'
import Link from 'next/link'
import { useState } from 'react'


const Login = () => {
  
const [email,setEmail]=useState();
const [password,setPassword] = useState()
const [error,setError] = useState(false)

const handleLogin=(event)=>{
  event.preventDefault();
  if(!email || !password){
    setError(true)
    
  }else{
    setError(false)
  }
  setEmail('');
  setPassword('')
  console.log(email,password)
}

  return (
    <>
    <div className="hero bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Do not have Account? <Link className=' text-blue-700 text-2xl font-extrabold' href="/signup">Sign Up</Link>
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input value={email} onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="email" className="input input-bordered" required />
          {
            error && !email && <span className='text-red-500'>Please enter a valid Email</span>
          }
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input value={password} onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="password" className="input input-bordered" required />
          {
            error && !password  && <span className='text-red-500'>Please enter a valid Password</span>
          }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default Login