'use client'



import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setC_password] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const [error, setError] = useState({}); // Object to store errors
  const router = useRouter();

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Validation check
    let errors = {};
    if (!email) errors.email = "Please fill this field";
    if (!password) errors.password = "Please fill this field";
    if (!c_password) errors.c_password = "Please fill this field";
    if (password !== c_password) errors.c_password = "Passwords do not match";
    if (!name) errors.name = "Please fill this field";
    if (!city) errors.city = "Please fill this field";
    if (!address) errors.address = "Please fill this field";
    if (!contact) errors.contact = "Please fill this field";

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return; // Stop submission if there are errors
    } else {
      setError({});
    }

    // Proceed to send data if validation passes
    const fetchData = await fetch('http://localhost:3000/api/restaurants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name, city, address, contact }),
    });

    const response = await fetchData.json();
    if (response.success) {
      alert("Your Sign Up is Successful");
      setEmail('');
      setPassword('');
      setC_password('');
      setName('');
      setCity('');
      setAddress('');
      setContact('');

      localStorage.setItem('restaurantUser', JSON.stringify(response.result));
      router.push('/restaurant/Dashboard');
    } else {
      alert(response.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="hero bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Please!</h1>
          <p className="py-6">
            Already Have an Account? 
            <span>
              <Link href='/login' className=' text-blue-700 text-2xl font-extrabold'>Log In</Link>
            </span>
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="input input-bordered"
              />
              {error.email && <span className="text-red-500">{error.email}</span>}
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input input-bordered"
              />
              {error.password && <span className="text-red-500">{error.password}</span>}
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input 
                type="password"
                value={c_password}
                onChange={(e) => setC_password(e.target.value)}
                placeholder="Confirm Password"
                className="input input-bordered"
              />
              {error.c_password && <span className="text-red-500">{error.c_password}</span>}
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Restaurant Name</span>
              </label>
              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Restaurant Name"
                className="input input-bordered"
              />
              {error.name && <span className="text-red-500">{error.name}</span>}
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input 
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                className="input input-bordered"
              />
              {error.city && <span className="text-red-500">{error.city}</span>}
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Address</span>
              </label>
              <input 
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Full Address"
                className="input input-bordered"
              />
              {error.address && <span className="text-red-500">{error.address}</span>}
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contact Number</span>
              </label>
              <input 
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Contact Number"
                className="input input-bordered"
              />
              {error.contact && <span className="text-red-500">{error.contact}</span>}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;


// export default Signup