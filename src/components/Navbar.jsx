import React from 'react'
import { about } from '../assets/about'
import { Link, NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (
    <div>
        <nav className='w-[1535px] h-[200px] container mx-auto flex justify-center'>
            <div className='w-[1200px] h-[200px] flex items-center justify-between'>
                <div>
                    <Link to="/">
                        <img src={about.logo} alt="" />
                    </Link>
                </div>

                <div className='flex gap-10 text-lg'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/pages">Pages</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/project">Project</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/search"><FaSearch /></NavLink>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar