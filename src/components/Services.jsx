import React from 'react'


const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Creating visually appealing and user-friendly web designs.",
    },
    {
      id: 2,
      title: "App Development",
      description: "Building high-quality mobile applications for Android and iOS.",
    },
    {
      id: 3,
      title: "SEO Optimization",
      description: "Improving website rankings on search engines and increasing visibility.",
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      description: "Developing online stores with secure payment integrations.",
    },
    {
      id: 5,
      title: "Cloud Services",
      description: "Offering scalable and secure cloud-based solutions.",
    },
    {
        id: 6,
        title: "Digital Marketing",
        description: "Promote your business with our digital marketing team",
      },
  ];
  
const Services =() => {
  return (
    <div className='bg-black text-white py-20' id='service'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24 '>
   <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
   {services.map((service) => (
            <div key={service.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
           <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400'>
            {service.id}
            </div>     
            <div>
                <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>{service.title}</h3>
                <p className='mt-2 text-gray-500'>{service.description}</p>
                <a href='#' className='mt-4 inline-block text-green-400 hover:text-blue-400'>Read More</a>
         </div>   
   </div>
   ))}
   </div>
   </div>
   </div>
  )
}

export default Services