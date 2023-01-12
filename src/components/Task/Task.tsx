import React from 'react'
import './task.css'
import { TaskType } from '../../types/types'
import TaskStatus  from './Task__status/TaskStatus'

interface TaskProps {
  task: TaskType
}

const Task = ({ task }: TaskProps) => {
  return (
    <div className='task'>
      <div className='task--title'>{task.title}</div>
        <div className="task__info">
          <div className="task__info--status">
            <TaskStatus  
              priority = {task.priority}
              difficulty = {task.difficulty}
              endDay = {task.endDay}/>
          </div>
          <div className="task__info--category"></div>
        </div>
    </div>
  )
}

export default Task