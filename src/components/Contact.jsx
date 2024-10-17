import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Connect Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>

          <div className='flex-1'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300'>Let's Talk</h3>
            <p className='mt-6'>I am open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a className='hover:underline' href='mailto:youremail@example.com'>youremail@example.com</a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>+9932201444</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkerAlt className='inline-block text-green-400 mr-2' />
              <span>Street, City, Country</span>
            </div>
          </div>
          
          <div className='flex-1 w-full'>
          <form className='space-y-4'>
            <div>
                <label htmlFor='name' className='mb-2 block'>Your Name </label>
                <input type='text'
                className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-300'
                placeholder='Enter your name'
                />
            </div>
            <div>
                <label htmlFor='email' className='mb-2 block'>Email </label>
                <input type='email'
                className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-300'
                placeholder='Enter your Email'
                />
            </div>
            <div>
                <label htmlFor='message' className='mb-2 block'>Message</label>
                <textarea type='text'
                className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-300'
                rows="5"
                placeholder='Enter your message'
                />
            </div>
            <button className='bg-gradient-to-r from-green-300 to to-blue-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Send</button>
          </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;