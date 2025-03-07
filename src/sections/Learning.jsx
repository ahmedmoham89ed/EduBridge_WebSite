import React from 'react'
import { useEffect, useRef } from "react"
import {motion,useInView} from "framer-motion"
const Learning = () => {
    const ref=useRef(null);
    const isView=useInView(ref);

    useEffect(()=>{
         console.log("is in view",isView);
    },[isView]);
  return (
    <motion.div className='bg-[#252b42] xl:max-w-[100%] lg:h-[93vh] xl:h-[90vh] md:h-[85vh] sm:h-[85vh] flex items-start justify-center text-center '>
      <div className="" ref={ref}>
        <div className="xl:mt-20 lg:mt-8 md:mt-16 sm:mt-10 mb-10">
            <p className='text-red-500 xl:text-2xl lg:text-2xl font-bold font-[drm]'>Join Us</p>
            <h1 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl max-w-96 m-auto my-3 text-white'>Best Learning Opportunities</h1>
            <p className='xl:text-base xl:py-2 lg:text-sm md:text-sm sm:text-sm lg:max-w-[25rem] md:max-w-[20rem] sm:max-w-[15rem]  text-white max-w-[33rem] m-auto my-3 font-[drm] '>We know how large objects will act, but things on a small scale just do not act that way.</p>
            <div className="flex items-center justify-center gap-5 lg:gap-3 md:gap-2 sm:gap-1">
                <button className='getbutton lg:text-base md:text-sm sm:text-sm'>Get quote now</button>
                <button className='getbutton lg:text-base md:text-sm sm:text-sm'>learn more</button>
            </div>
        </div>
        <div className="flex items-center justify-center gap-8 lg:gap-4 md:gap-2 sm:gap-2">
            <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} 
                        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                        transition={{ duration: 0.2, delay: 0.4 }} 
                        viewport={{ once: false }}
                        whileHover={{ scale: 1.05, rotate: 2 }} 
                        className="xl:max-w-[23rem] lg:max-w-[18rem] md:max-w-[15rem] sm:max-w-[11rem]  bg-white rounded-xl flex flex-col items-start gap-3 pl-10 py-6 hover:scale-110 transition-all ease-in-out duration-300 ">
                <div className="bg-red-300 p-2 rounded-lg sm:-ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6" color='red' >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                </div>
                <div className="book sm:-ml-4 text-2xl  font-[drm] font-bold lg:font-bold lg:text-xl md:font-bold md:text-lg sm:font-bold sm:text-sm pb-4 ">
                    <h1>Books Library</h1>
                </div>
                <div className="text-base font-[drm] text-left lg:text-sm md:text-sm sm:text-sm sm:-ml-4">
                    <p>The gradual accumulation of information about atomic and small-scale behavior...</p>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} 
                        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                        transition={{ duration: 0.2, delay: 0.4 }} 
                        viewport={{ once: false }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="xl:max-w-[23rem] lg:max-w-[18rem] md:max-w-[15rem] sm:max-w-[11rem] bg-white rounded-xl flex flex-col items-start gap-3 pl-10 py-6 hover:scale-110 transition-all ease-in-out duration-300">
                <div className="bg-green-300 p-2 rounded-lg sm:-ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" color='green' >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>
                </div>
                <div className="book books text-2xl font-[drm] font-bold pb-4 lg:font-bold lg:text-xl md:font-bold md:text-lg sm:font-bold sm:text-base sm:-ml-4">
                    <h1>Market Analysis</h1>
                </div>
                <div className="text-base font-[drm] text-left lg:text-sm md:text-sm sm:text-sm sm:-ml-4">
                    <p>The gradual accumulation of information about atomic and small-scale behavior...</p>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} 
                        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                        transition={{ duration: 0.2, delay: 0.4 }} 
                        viewport={{ once: false }}
                        whileHover={{ scale: 1.05, rotate: 2 }} 
                        className="xl:max-w-[23rem] lg:max-w-[18rem] md:max-w-[15rem] sm:max-w-[11rem] bg-white rounded-xl flex flex-col items-start gap-3 pl-10 py-6 hover:scale-110 transition-all ease-in-out duration-300">
                <div className="bg-blue-300 p-2 rounded-lg sm:-ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" color='blue'>
                         <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>
                </div>
                <div className="book boook text-2xl font-[drm] font-bold pb-4 lg:font-bold lg:text-xl md:font-bold md:text-lg sm:font-bold sm:text-sm  sm:-ml-4">
                    <h1>50+ online courses</h1>
                </div>
                <div className="text-base font-[drm] text-left lg:text-sm md:text-sm sm:text-sm sm:-ml-4">
                    <p>The gradual accumulation of information about atomic and small-scale behavior...</p>
                </div>
            </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Learning