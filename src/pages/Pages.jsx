import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Pages = () => {
  return (
    <div>
        <Navbar />
        <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl  font-bold mb-12">NOTHING NO</h1>
        <Link to="/" className="px-6 py-4 back  text-white  rounded-xl">Go back to Home</Link>
      </div>
    </div>
    </div>
  )
}

export default Pages