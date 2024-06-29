import React from 'react'
import Navbar from '../components/Navbar'
import "./App.css"

const Services = () => {
  return (
    <div>
        <Navbar />
        <div className='w-[1520px] h-[300px]  container mx-auto flex items-center justify-center  servis mt-120'>
            <h2 className='text-6xl text-white '>Services</h2>
        </div>
        <div className='flex mt-24 mx-auto '>
            <div className='w-[300px] ml-[200px]  text-center hover:text-yellow-500 cursor-pointer'>
                <h2 className='text-2xl'>Project Plan</h2>
                <p>There are many variations of the <br /> passages of lorem Ipsum from <br /> available, majority.</p>
                <button className='text-xl mt-8'>Read more</button>
            </div>
            <div className='w-[300px] ml-24 text-center hover:text-yellow-500 cursor-pointer'>
                <h2 className='text-2xl'>Interior Work</h2>
                <p>There are many variations of the <br /> passages of lorem Ipsum from <br /> available, majority.</p>
                <button className='text-xl mt-8'>Read more</button>
            </div>
            <div className='w-[300px] ml-24 text-center hover:text-yellow-500 cursor-pointer'>
                <h2 className='text-2xl'>Retail Design</h2>
                <p>There are many variations of the <br /> passages of lorem Ipsum from <br /> available, majority.</p>
                <button className='text-xl mt-8'>Read more</button>
            </div>
        </div>


        <div className='flex mt-24 mx-auto '>
            <div className='w-[300px] ml-[200px]  text-center hover:text-yellow-600 cursor-pointer'>
                <h2 className='text-2xl'>2d/3d Art Work</h2>
                <p>There are many variations of the <br /> passages of lorem Ipsum from <br /> available, majority.</p>
                <button className='text-xl mt-8'>Read more</button>
            </div>
            <div className='w-[300px] ml-24 text-center hover:text-yellow-600 cursor-pointer'>
                <h2 className='text-2xl'>Interior Work</h2>
                <p>There are many variations of the <br /> passages of lorem Ipsum from <br /> available, majority.</p>
                <button className='text-xl mt-8'>Read more</button>
            </div>
            <div className='w-[300px] ml-24 text-center hover:text-yellow-600 cursor-pointer'>
                <h2 className='text-2xl'>Decoration Work</h2>
                <p>There are many variations of the <br /> passages of lorem Ipsum from <br /> available, majority.</p>
                <button className='text-xl mt-8'>Read more</button>
            </div>
            
        </div>
    </div>
  )
}

export default Services