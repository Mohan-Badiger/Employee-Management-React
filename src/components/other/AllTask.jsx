import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded h-[40%]'>

      <div className='bg-zinc-700 py-2 px-4 flex justify-between rounded mb-2'>
        <h2 className='bg-zinc-800 w-1/6 p-1 rounded text-center font-semibold'>Employee Name</h2>
        <h3 className='bg-zinc-800 w-1/6 p-1 rounded text-center font-semibold'>New Task</h3>
        <h5 className='bg-zinc-800 w-1/6 p-1 rounded text-center font-semibold'>Active Task</h5>
        <h5 className='bg-zinc-800 w-1/6 p-1 rounded text-center font-semibold'>Completed Task</h5>
        <h5 className='bg-zinc-800 w-1/6 p-1 rounded text-center font-semibold'>Failed Task</h5>
      </div>

      <div id="TaskList" className='overflow-auto h-[80%]'>
        {userData.map((elem, idx) => {
          return <div className='border-zinc-700 border-[2px] py-2 px-4 flex justify-between rounded mb-2' key={idx}>
            <h2 className='w-1/6 p-1 rounded text-center'>{elem.first_name}</h2>
            <h3 className='text-blue-400 w-1/6 p-1 rounded text-center'>{elem.task_count.newtask}</h3>
            <h5 className='text-yellow-400 w-1/6 p-1 rounded text-center'>{elem.task_count.active}</h5>
            <h5 className='text-green-400 w-1/6 p-1 rounded text-center'>{elem.task_count.completed}</h5>
            <h5 className='text-red-400 w-1/6 p-1 rounded text-center'>{elem.task_count.failed}</h5>
          </div>
        })}
      </div>

    </div>
  )
}

export default AllTask