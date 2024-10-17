import React from 'react'

const Footer = ()  => {
  return (
    <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row items-center md:space-x-12 mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-2xl font-bold mb-2'>yourself</h3>
                <p className='text-gray-400'>react and powerbuilder</p>
                </div>
               <div className='flex-1'>
                <form className='flex items-center justify-center'>
                <input type='email'
                placeholder='Enter your Email'
                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-300'
                />
                <button className='bg-gradient-to-r from-yellow-500 to to-pink-500 text-white  px-4 py-2 rounded-r-lg'>Subscribe</button>
                </form>
               </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer