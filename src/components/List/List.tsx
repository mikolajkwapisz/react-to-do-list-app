import React from 'react'
import './list.css'
import { TaskType } from '../../types/types'
import { BsClipboard, BsClipboardCheck } from 'react-icons/bs'
import Task from '../Task/Task'

interface listProps {
    tasks: TaskType[],
    tasksRequiredStatus: boolean
}

const List: React.FC<listProps> = ( {tasks, tasksRequiredStatus}) => {
  return (
    <>
        {
            tasksRequiredStatus ? (
                <div className='list__active list'>
                    <div className='list__active--title list__title'>
                        <BsClipboard />
                        <p>To-Do</p>
                    </div>
                    Active
                </div>
            ):
            (
                <div className='list__done list'>
                    <div className='list__done--title list__title'>
                        <BsClipboardCheck />
                        <p>Done</p>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default List