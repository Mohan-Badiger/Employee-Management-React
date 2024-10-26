import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

  const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.first_name)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-semibold'>Hello <br /><span className='text-3xl font-bold'>From Mohan👋</span></h1>
            <button onClick={logOutUser} className='text-lg bg-red-600 px-5 py-2 font-semibold rounded-sm'>Log Out</button>
        </div>
    </div>
  )
}

export default Header