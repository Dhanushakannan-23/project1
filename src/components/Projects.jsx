import React from 'react'
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"



const projects = [
    {
      id: 1,
      name:"Movie WebSite",
      technologies:"React Tailwind",
      image:project1
    },
    {
        id: 2,
        name:"Student Enquiry",
        technologies:"React Tailwind",
        image:project2
    },
  ];
const Projects =() => {
  return (
    <div className='bg-black text-white py-20' id='projects'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24 '>
   <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
   {projects.map((project) => (
            <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
              <img  src={project.image}  alt={project.name}  className='rounded-lg mb-4 w-full h-48 object-cover'/>
              <h3 className='text-2xl font-bold mt-4'>{project.name}</h3>
              <p className='text-gray-300 mb-4'>{project.technologies}</p>
            </div>
          ))}

    </div>
    </div>
    </div>
  )
}

export default Projects