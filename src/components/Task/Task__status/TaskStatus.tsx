import React from 'react'
import './taskStatus.css'

interface TaskStatusProps {
    priority: string,
    difficulty: string,
    endDay: string
}

const TaskStatus= ({priority, difficulty, endDay}: TaskStatusProps) => {
  return (
    <div>{priority}</div>
  )
}

export default TaskStatus