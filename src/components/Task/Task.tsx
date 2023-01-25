import React from 'react'
import './task.css'
import { TaskType } from '../../types/types'
import TaskStatus  from './Task__status/TaskStatus'

interface TaskProps {
  options: TaskType
}

const Task = ({ options }: TaskProps) => {
  return (
    <div className='task'>
      <div className='task--title'>{options.title}</div>
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