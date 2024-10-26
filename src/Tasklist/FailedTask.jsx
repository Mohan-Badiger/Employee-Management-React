import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full w-[300px] rounded-xl bg-zinc-800 flex-shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-zinc-600 px-3 py-1 rounded text-sm font-semibold'>{data.category}</h3>
                <h4 className='text-sm'>{data.task_date}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.task_title}</h2>
            <p className='text-sm mt-2'>{data.task_description}</p>

            <div className='flex justify-between mt-6'>
                <button className='bg-red-600 py-2 w-full text-sm rounded font-semibold'>Failed</button>  
            </div>
        </div>
  )
}

export default FailedTask