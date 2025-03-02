import React from 'react'
import NavigationMenuDemo from "../component/Navbar"
import Learning from '../sections/Learning'
import Education from '@/sections/Education'
import Practice from '@/sections/Practice'
import Footer from '@/sections/Footer'

const Home = () => {
  return (
    <>
      <NavigationMenuDemo/>
      <Learning />
      <Education/>
      <Practice/>
      <Footer/>
    </>
  )
}

export default Home