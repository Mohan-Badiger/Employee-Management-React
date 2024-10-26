import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)


    const [task_title, settask_title] = useState('');
    const [task_description, settask_description] = useState('');
    const [task_date, settask_date] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');

    const [newTask, setNewTask] = useState({});

    const submitHandler = (e)=> {
        e.preventDefault()

        setNewTask({task_title, task_description, task_date, category, active: false, new_task: true, completed: false, failed: false});

        const data = userData

        data.forEach((elem)=>{
            if(asignTo == elem.first_name){
                elem.tasks.push(newTask)
            }
        })

        setUserData(data)
        console.log(data)


        settask_title('')
        settask_description('')
        settask_date('')
        setAsignTo('')
        setCategory('')

    }
    

  return (
    <div className='p-5 bg-[#222222] mt-7 rounded'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} 
                className='flex w-full flex-wrap items-start justify-between '>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input value={task_title}
                            onChange={(e)=>{
                                settask_title(e.target.value)
                            }}
                            className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                        </div>
                        <div>
                            <h3 id="#date" className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input value={task_date}
                            onChange={(e)=>{
                                settask_date(e.target.value)
                            }}
                            className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                            <input value={asignTo}
                            onChange={(e)=>{
                                setAsignTo(e.target.value)
                            }} 
                            className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input value={category}
                            onChange={(e)=>{
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design/Dev/etc...' />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <h3>Description</h3>
                        <textarea value={task_description}
                            onChange={(e)=>{
                                settask_description(e.target.value)
                            }}
                         name="" id="" cols={30} rows={10} className='text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'></textarea>
                        <button className='text-lg font-semibold py-3 px-5 w-full rounded outline-none mt-4  bg-emerald-700 hover:bg-emerald-800 border-gray-400 mb-4'>Create Task</button>

                    </div>
                </form>
            </div>
  )
}

export default CreateTask