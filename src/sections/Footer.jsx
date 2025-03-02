import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="max-w-[75%] mx-auto mt-10 mb-4 pt-4 px-4">
      <motion.div  
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }} 
          viewport={{ once: false }}  
          className="flex flex-col md:flex-row gap-40 pb-10">
       
        <motion.div
          initial={{ opacity: 0, x: -250, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }} 
        >
          <p className="text-2xl font-bold pb-2">Get In Touch</p>
          <p className="text-md text-gray-400 hover:text-black duration-300 cursor-pointer pb-2">
            Lorem ipsum dolor sit amet
          </p>
          <div className="flex gap-5 text-blue-500 pt-2 text-xl">
            <FaFacebook className="hover:scale-110 duration-300 cursor-pointer" />
            <FaInstagram className="hover:scale-110 duration-300 cursor-pointer" />
            <FaTwitter className="hover:scale-110 duration-300 cursor-pointer" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }} 
          viewport={{ once: false }} 
        >
          <p className="text-2xl font-bold pb-2">Company Info</p>
          <p className="text-md text-gray-400 hover:text-black duration-300 cursor-pointer pb-2">
            About Us
          </p>
          <p className="text-md text-gray-400 hover:text-black duration-300 cursor-pointer pb-2">
            Career
          </p>
          <p className="text-md text-gray-400 hover:text-black duration-300 cursor-pointer pb-2">
            We are hiring
          </p>
          <p className="text-md text-gray-400 hover:text-black duration-300 cursor-pointer pb-2">
            Blog
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }} 
            viewport={{ once: false }} 
        >
          <p className="text-2xl font-bold pb-2">Features</p>
          <p className="text-md text-gray-400 hover:text-black duration-300 cursor-pointer pb-2">
          Business Marketing
          </p>
          <p className="text-md text-gray-400 hover:text-black duration-300 cursor-pointer pb-2">
          User Analytic
          </p>
          <p className="text-md text-gray-400 hover:text-black duration-300 cursor-pointer pb-2">
          Live Chat
          </p>
          <p className="text-md text-gray-400 hover:text-black duration-300 cursor-pointer pb-2">
          Unlimited Support
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 250, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }} 
          viewport={{ once: false }} 
        >
          <p className="text-2xl font-bold pb-2">Resources</p>
          <p className="text-md text-gray-400 hover:text-black duration-300 cursor-pointer pb-2">
          IOS & Android
          </p>
          <p className="text-md text-gray-400 hover:text-black duration-300 cursor-pointer pb-2">
          Watch a Demo
          </p>
          <p className="text-md text-gray-400 hover:text-black duration-300 cursor-pointer pb-2">
          Customers
          </p>
          <p className="text-md text-gray-400 hover:text-black duration-300 cursor-pointer pb-2">
          API
          </p>
        </motion.div>

      </motion.div>
      <motion.div 
          initial={{ opacity: 0, y: 150, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: .3, delay: 0.2 }} 
          viewport={{ once: false }}   className="">
        <p className='text-center font-[rdm] text-xl '>@ 2025 | all rights reserved made by <span className='text-blue-500'>Ahmed Mohamed Mostafa</span></p>
      </motion.div>
    </div>
  );
};

export default Footer;