import React from 'react'
import "./Style.css"

const Header = () => {
  return (
    <div>
        <header  className='w-[1200px] h-[800px]  container mx-auto  banner mt-20 '>
            <h1 className='text-6xl text-white pt-28 pl-8'>Let's make your <br /> home beautiful together</h1>
            <p className='text-xl text-white pl-8 pt-4'>There are many variations of the passages <br /> of lorem Ipsum fromavailable, majority.</p>
            <button className='px-6 py-4 back text-white ml-8 mt-8 rounded-xl'>Get started </button>
        </header>
        
    </div>
  )
}

export default Header