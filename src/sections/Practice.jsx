import React from 'react'
import {motion} from "framer-motion"
const Practice = () => {
  return (
    <div className="bg-[#252b42] text-white text-center pt-2">
        <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} 
                    whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                    transition={{ duration: 0.2, delay: 0.4 }} 
                    viewport={{ once: false }}
                    className="max-w-[75%] h-[38vh] m-auto mt-10 mb-4">
            <p className='text-blue-500 text-xl font-[rdm] font-bold pb-3'>Practice Advice</p>
            <h1 className='text-3xl font-bold pb-3'>JOIN US</h1>
            <p className='max-w-[60%] m-auto text-lg font-[rlight] '>Have questions or need assistance? Reach out to us through our team. We are here to help and ensure you have the best experience possible!</p>
        
            <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} 
                        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                        transition={{ duration: 0.2, delay: 0.2 }} 
                        viewport={{ once: false }}
                        className="flex items-center justify-center mt-10">
                <input type="text" placeholder='Your Email' className='w-[34rem] h-10 outline-0 rounded-tl-md rounded-bl-md indent-2 text-black font-[rregular] '  />
                <button className='bg-blue-500 w-36 h-10 rounded-tr-md rounded-br-md hover:scale-110 duration-500 ease-in-out transition-all '>Subscribe</button>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Practice