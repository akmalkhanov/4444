import React from 'react'
import Navbar from '../components/Navbar'
import "./App.css"
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className='flex '>
            <div className='w-[300px] ml-[200px]  text-center hover:text-yellow-600 cursor-pointer'>
                <h2 className='text-2xl'>Project Plan</h2>
                <p className='mt-4'>There are many variations of the <br /> passages of lorem Ipsum from <br /> available, majority.</p>
                <button className='text-xl mt-8'>Read more</button>
            </div>
            <div className='w-[300px] ml-24 text-center hover:text-yellow-600 cursor-pointer'>
                <h2 className='text-2xl'>Interior Work</h2>
                <p className='mt-4'>There are many variations of the <br /> passages of lorem Ipsum from <br /> available, majority.</p>
                <button className='text-xl mt-8'>Read more</button>
            </div>
            <div className='w-[300px] ml-24 text-center hover:text-yellow-600 cursor-pointer'>
                <h2 className='text-2xl'>Project Plan</h2>
                <p className='mt-4'>There are many variations of the <br /> passages of lorem Ipsum from <br /> available, majority.</p>
                <button className='text-xl mt-8'>Read more</button>
            </div>
            
        </div>
    </div>
  )
}

export default Home