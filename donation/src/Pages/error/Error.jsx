import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className=''>
      <h1 className='text-center text-7xl mt-10'>Error</h1>
      <h1 className='text-center text-3xl mt-10'>Your Data Not Found</h1>
      <h1 className='ml-96 text-4xl mt-10 text-center mr-96 py-12 rounded-lg bg-red-400 text-white'>
      <NavLink  to='/'>Click Me</NavLink>
      </h1>
    </div>
  )
}

export default Error
