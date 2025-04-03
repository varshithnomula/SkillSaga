import React from 'react'
import Hero from '../../components/students/Hero'
import Companies from '../../components/students/Companies'
import CourseSection from '../../components/students/CourseSection'
import TestimonialsSection from '../../components/students/TestimonialsSection'
import CallToAction from '../../components/students/CallToAction'
import Footer from '../../components/students/footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <Companies/>
      <CourseSection/>
      <TestimonialsSection/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home
