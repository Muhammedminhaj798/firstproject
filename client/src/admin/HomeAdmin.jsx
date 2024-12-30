import React from 'react'
import { Link } from 'react-router-dom'


function HomeAdmin() {
  return (
    <div>
      <div className="w-1/3 h-screen bg-slate-500 flex flex-col ">
        <h1 className="text-center text-5xl pt-28">FootFusion</h1>
        <Link to='/admin-product'><h1 className='text-center text-4xl py-5'>Products</h1></Link>
        <h1 className='text-center text-4xl py-5'>Users</h1>
        <h1 className='text-center text-4xl py-5'>orders</h1>
        <button>Logout</button>
      </div>

    </div>
  )
}

export default HomeAdmin
