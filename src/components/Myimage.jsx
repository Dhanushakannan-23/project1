import React from 'react'
import image from "../assets/image1.jpg"

export default function Myimage() {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={image}
         alt=""
         className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
         />
        <h1 className='text-4xl font-bold'>
            I am
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> Dhanusha Kannan</span>
            ,software developer
        </h1>
        <p className='mt-4 text-lg text-gray-300 '>I specialized in react and powerbuilder</p>
        <div className='mt-4 space-x-5'>
            <button className='bg-gradient-to-r from-green-300 to to-blue-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact with me</button>
            <button className='bg-gradient-to-r from-pink-400 to to-yellow-300 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>
    </div>
  )
}
