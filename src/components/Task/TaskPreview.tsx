import React, { useContext } from 'react'
import './task.css'
import { TaskType } from '../../types/types'
import TaskStatus  from './Task__status/TaskStatus'
import { MdOutlineDone, MdDelete, MdUndo } from 'react-icons/md'
import { RiArrowGoBackFill } from 'react-icons/ri'

interface TaskProps {
  options: TaskType
}

const TaskPreview = ({ options }: TaskProps) => {
  return (
    <div className='task'>
      <div className='task__status'>
       <div className = 'task__status--title'>{options.title}</div>
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

export default TaskPreview