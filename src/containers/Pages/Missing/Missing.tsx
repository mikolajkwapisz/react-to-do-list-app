import React from 'react'
import Select from '../../../components/Select/Select'
import './missing.css'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='missing main__margin'>
      <h1 style={{color: 'white'}}>Page not found.</h1>
      <Link style={{color: 'royalBlue'}} to={'/'}>home page</Link>
    </main>
  )
}

export default Missing