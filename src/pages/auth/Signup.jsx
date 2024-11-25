import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
import { AppContext } from '../../contexts/AppContext'
import { useState } from 'react'
import axios from 'axios'


const Signup = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    age: '',
    password: ''
  }

  const [formData, setFormData] = useState(initialState)
  const history = useNavigate()
  const {dispatch} = useContext(AppContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await axios.post("http://localhost:7788/api/v1/auth/signup", formData);
    console.log(res.data);
    localStorage.setItem("user", JSON.stringify(res.data))
    toast.success("Registration successful 👌")
    dispatch({type: "LOGIN", payload:res.data})
    history("/")

}catch (error) {
    console.log(error);
    toast.error(error.response.data.message || error.response.data.error || "An error occured")
}
}


const handleChange = (e) => {
  let {name, value} = e.target

  setFormData((prev) => ({
    ...prev, [name] : value
  }))
}
  
  return (
    <>
    <div className='min-h-dvh px-20'>
     <header className="flex justify-between items-center">
                <div className="flex justify-center items-center">
                    <img src="/svgs/buy.svg" alt="Ooja logo" width={100} />{" "}
                    <h2 className="font-iceberg text-5xl">Ooja</h2>
                </div>
                <nav>
                    <ul className="flex justify-center items-center space-x-2">
                        <li>
                            <Link to="/login" className="bg-rose-600 text-white   py-2 px-4 rounded-md font-bold">Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    <div className=' min-h-screen '>
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
  <div className="mx-auto max-w-lg">
    
    <form action="#" className="mb-0 mt-1 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-slate-700 " onSubmit={handleSubmit}>
        
      <p className="text-center text-3xl text-white font-medium">SignUp</p>

    <div className='flex space-x-4'>
      <div>
        <label htmlFor="text" className='text-white'>FirstName:</label>
        <div className="relative">
          <input
            type="text"
            id='firstName'
            name='firstName'
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter firstname"
          />
        </div>
      </div>

      <div>
        <label htmlFor="text" className='text-white'>LastName:</label>
        <div className="relative">
          <input
            type="text"
            id='lastName'
            name='lastName'
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter lastname"
          />
        </div>
      </div>
      </div>

    <div className='flex space-x-4'>

    <div>
        <label htmlFor="text" className='text-white'>UserName:</label>
        <div className="relative">
          <input
            type="text"
            id='userName'
            name='userName'
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter username"
          />
        </div>
      </div>

      <div>
        <label htmlFor="text" className='text-white'>Age:</label>
        <div className="relative">
          <input
            type="number"
            id='age'
            name='age'
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter age"
          />
        </div>
      </div>
      </div>

<div className='flex space-x-4'>
      <div>
        <label htmlFor="email" className='text-white' >Email:</label>

        <div className="relative">
          <input
            type="email"
            id='email'
            name='email'
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      

      <div>
        <label htmlFor="password" className='text-white'>Password:</label>

        <div className="relative">
          <input
            type="password"
            id='password'
            name='password'
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-rose-500 text-white px-5 py-3 text-lg font-medium "
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-white">
        Already have an account? <Link className="text-yellow-300" to="/signup">Login</Link>
      </p>
    </form>
  </div>
</div>
</div>
</div>
    </>
  )
}

export default Signup