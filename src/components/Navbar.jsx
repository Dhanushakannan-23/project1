import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex md:justify-between justify-center items-center'>
            <div className='text-2xl font-bold hidden md:inline'>MySelf</div>
            <div className='space-x-6'>
                <a href="#Home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#service" className='hover:text-gray-400'>Services</a>
                <a href="#projects" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-green-300 to to-blue-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>connect me</button>
        </div>
    </div>
  )
}

export default  Navbar