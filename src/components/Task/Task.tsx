import React, { useContext } from 'react'
import './task.css'
import { TaskType } from '../../types/types'
import TaskStatus  from './Task__status/TaskStatus'
import { MdOutlineDone, MdDelete, MdUndo } from 'react-icons/md'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { useQueryMutation } from '../../context/QueryContext'

interface TaskProps {
  options: TaskType
}

const Task = ({ options }: TaskProps) => {
  const { updateTaskMutation, deleteTaskMutation} = useQueryMutation()

  const updateTaskStatus = ( option: boolean) => {
    return updateTaskMutation.mutate({...options, status: !options.status })
  }
  return (
    <div className='task'>
      <div className='task__status'>
        <div className='task__status--title'> {options.title} </div>
        <div className='task__status--icons'>{
          options.status ? <MdOutlineDone onClick={() => updateTaskStatus(false)} /> : (
            <>
            <RiArrowGoBackFill 
              onClick={() => updateTaskStatus(true)}/>
            <MdDelete 
              onClick={() => deleteTaskMutation.mutate(options.id)}/>
            </>
          )
          }
          </div>
        </div>
        <div className="task__info">
          <div className="task__info--status">
            <TaskStatus  
              priority = {options.priority}
              difficulty = {options.difficulty}
              endDay = {options.endDay}/>
          </div>
          <div className="task__info--category"><p>{options.category}</p></div>
        </div>
    </div>
  )
}

export default Task