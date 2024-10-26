import React, { useState } from 'react'


const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail('')
    setPassword('')
  }

  return (
    <>
    <div className="flex items-center justify-center h-screen flex-col bg-zinc-800">
        <div className='w-96  px-5 py-8 rounded-lg flex bg-zinc-700'>
          <form className='w-full flex flex-col' onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <h1 className='text-3xl text-white'>Login</h1>
            <input
            value={email} 
            onChange={(e)=>{
              setEmail(e.target.value)
            }} 
            required type="email" placeholder='Enter Email Id' className='mt-10 w-full h-10 px-5 outline-none rounded text-black' /><br />
            <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }} 
            required type="password" placeholder='Enter Password' className='mt-3 w-full h-10 px-5 outline-none rounded text-black' /><br />
            <button className='mt-5 text-center text-white font-semibold rounded bg-orange-500 w-full h-10 mb-10'>Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login