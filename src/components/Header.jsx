import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaArrowRightLong } from "react-icons/fa6";
import {  FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className=' bg-gradient-to-b from-[#0A1F44] to-[#121212] fixed sm:w-[100%] w-[100vw] z-20'>
      <header>
        <nav className='flex items-center justify-between mx-5 gap-25'>
          
            <ul>
                <li><a href="#home"><img src={logo} alt="" className='sm:max-w-[150px] max-w-[90px]' /></a></li>
            </ul>
            <ul className=' text-white  hidden lg:flex items-center gap-6 lg:gap-10 text-base font-medium'>
                <li className='hover:text-[#38BDF8] cursor-pointer transition duration-300'><a href="#home">Home</a></li>
                <li className='hover:text-[#38BDF8] cursor-pointer transition duration-300' > <a href="#about">About</a></li>
                <li className='hover:text-[#38BDF8] cursor-pointer transition duration-300'><a href="#skills">Skills</a></li>
                <li className='hover:text-[#38BDF8] cursor-pointer transition duration-300'> <a href="#projects">Projects</a></li>
                <li className='hover:text-[#38BDF8] cursor-pointer transition duration-300'> <a href="#educations">Education</a></li>
                <li className='hover:text-[#38BDF8] cursor-pointer transition duration-300'> <a href="#contact">Contact</a></li>
            </ul>
            <ul className='text-white flex items-center gap-4'>
                <li><a href="#contact" className='bg-[#0088b9] md:px-10 md:py-4 px-3 py-3 md:rounded-4xl rounded-xl flex items-center whitespace-nowrap gap-2 hover:bg-[#046a8f] cursor-pointer transition duration-300 text-[12px] md:text-[16px]'>Contact Me <FaArrowRightLong /></a></li>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-gray-800 dark:text-white    hover:text-red-600 transition-colors"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            </ul>
            {/* Mobile Navigation */}
        </nav>
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80 md:max-h-125 pb-4" : "max-h-0"
          }`}
        >
         <ul className='flex flex-col items-center text-white sm:gap-16 gap-5 pt-2'>
                <li className='hover:text-[#38BDF8] cursor-pointer transition duration-300'><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li className='hover:text-[#38BDF8] cursor-pointer transition duration-300' > <a href="#about"onClick={() => setMenuOpen(false)}>About</a></li>
                <li className='hover:text-[#38BDF8] cursor-pointer transition duration-300'><a href="#skills"onClick={() => setMenuOpen(false)}>Skills</a></li>
                <li className='hover:text-[#38BDF8] cursor-pointer transition duration-300'> <a href="#projects"onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li className='hover:text-[#38BDF8] cursor-pointer transition duration-300'> <a href="#educations"onClick={() => setMenuOpen(false)}>Education</a></li>
                <li className='hover:text-[#38BDF8] cursor-pointer transition duration-300'> <a href="#contact"onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul> 
        </div>
      </header>
    </div>
  )
}

export default Header
