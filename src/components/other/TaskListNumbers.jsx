import React from 'react'
const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>

        <div className='rounded-xl px-6 py-9 w-[45%] bg-zinc-700'>
            <h2 className='text-3xl font-semibold'>{data.task_count.newtask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl px-6 py-9 w-[45%] bg-zinc-700'>
            <h2 className='text-3xl font-semibold'>{data.task_count.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl px-6 py-9 w-[45%] bg-zinc-700'>
            <h2 className='text-3xl font-semibold'>{data.task_count.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='rounded-xl px-6 py-9 w-[45%] bg-zinc-700'>
            <h2 className='text-3xl font-semibold'>{data.task_count.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers