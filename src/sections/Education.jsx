import React from 'react'
import Design from './Design'
import Online from './Online'
import Testimonials from './Testimonials'

const Education = () => {
  return (
    <div className="max-w-[75%] m-auto mt-20 mb-4">
        <div className="">
            <div className="">
                <p className='text-cyan-500 text-xl font-bold pb-3 font-[rdm]'>Practice Advice</p>
                <h1 className='text-5xl font-bold pb-4'>Make Online Education Accessible</h1>
                <p className='font-[rdm] text-lg pb-10'>Education is the most powerful tool to unlock potential, ignite curiosity, and shape a brighter future. Our platform believes in making learning accessible, engaging, and transformative, empowering students to achieve their dreams and build the skills they need for success in an ever-changing world.</p>
            </div>
            <Design/>
            <Online/>
            <Testimonials/>
        </div>
    </div>
  )
}

export default Education