import React from 'react'
import './list.css'
import { TaskType } from '../../types/types'
import {FiClipboard, FiCheckSquare} from 'react-icons/fi'
import Task from '../Task/Task'

interface ListProps {
    tasks: TaskType[],
    tasksRequiredStatus: boolean
}

const List= ( {tasks, tasksRequiredStatus}: ListProps) => {
  return (
    <>
        {
            tasksRequiredStatus ? (
                <div className='list__active list'>
                    <div className='list__active--title list__title'>
                        <FiClipboard />
                        <p>To-Do</p>
                    </div>
                    <div className="list__active--tasks list__tasks">
                        <ul>
                            { tasks.map( task => (
                                   <li key={task.id}>
                                    {task.status === tasksRequiredStatus && ( 
                                    <Task task ={task} />
                                   ) 
                               }
                               </li>
                                )) }
                        </ul>
                    </div>
                </div>
            ):
            (
                <div className='list__done list'>
                    <div className='list__done--title list__title'>
                        <FiCheckSquare />
                        <p>Done</p>
                    </div>
                    <div className='list__done--tasks list__tasks'>
                        <ul>
                            { tasks.map( task => (
                                    <li key={task.id}>
                                        {task.status === tasksRequiredStatus && ( 
                                        <Task task ={task}
                                        
                                        />) 
                                    }
                                    </li>
                                )) }
                        </ul>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default List