import React from 'react'
import { Link } from 'react-router-dom'

export default function MainHeader() {
  return (
    <div className='w-full bg-black flex justify-center p-5'>
        <div className='container flex justify-center items-center gap-5'>
            <Link to='/dashboard'><button className='btn btn-error text-3xl text-white'>dashboard</button></Link>
            <Link to='/api'> <button className='btn btn-error text-white text-3xl'>api</button></Link>
        </div>
      
    </div>
  )
}
