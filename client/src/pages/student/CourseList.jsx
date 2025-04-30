import React, { useContext, useEffect, useState } from 'react'
import {AppContext} from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import SearchBar from '../../components/students/SearchBar'
import CourseCard from '../../components/students/CourseCard'
import { assets } from '../../assets/assets'
import Footer from '../../components/students/footer'

const CourseList = () => {
  const {navigate, allCourses} = useContext(AppContext)
  const {input} = useParams()
  const [filteredCourse, setFilteredCourse] = useState([])

  useEffect(() => {
    if(allCourses && allCourses.length > 0) {
      input ? 
        setFilteredCourse(
          allCourses.filter(
            item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        )
      : setFilteredCourse(allCourses)
    }
  }, [allCourses, input])

  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
            <p className='text-gray-500'>
              <span className='text-blue-600 cursor-pointer'
              onClick={() => navigate('/')}>Home</span> / <span>Course List</span>
            </p>
          </div>
          <SearchBar data={input}/>
        </div>
        
        {input && 
          <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-600'>
            <p>{input}</p>
            <img src={assets.cross_icon} alt="Clear search" className='cursor-pointer' onClick={() => navigate('/course-list')}/>
          </div>
        }

        {filteredCourse.length === 0 ? (
          <div className='text-center py-10 text-gray-500'>
            No courses found {input && `for "${input}"`}
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
            {filteredCourse.map((course, index) => (
              <CourseCard key={course._id || index} course={course}/>
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </>
  )
}

export default CourseList
