import React from 'react'
import { useParams } from 'react-router-dom'
import './editTask.css'

const EditTask = () => {
  const { id } = useParams()

  return (
    <main className='edit main__margin'>EditTask {id}</main>
  )
}

export default EditTask