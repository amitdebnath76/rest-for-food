import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
    <>
    <div className="hero bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up Please!</h1>
      <p className="py-6">
       Already Have an Account? 
       <h6><Link href='/login' className=' text-blue-700 text-2xl font-extrabold'>Log In</Link></h6>
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input name='confirm-password' type="password" placeholder="Confirm Password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Restaurent Name</span>
          </label>
          <input type="text" placeholder="Restaurent Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter city</span>
          </label>
          <input name='city-name' type="text" placeholder="City Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Full Address</span>
          </label>
          <input name='full-address' type="text" placeholder="Full Address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Contact Number</span>
          </label>
          <input name='contact-number' type="text" placeholder="Contact Number" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default Signup