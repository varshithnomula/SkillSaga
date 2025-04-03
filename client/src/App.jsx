import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/students/Loading'
import Educator from './pages/Educator/Educator'
import DashBoard from './pages/Educator/DashBoard'
import AddCourse from './pages/Educator/AddCourse'
import MyCourses from './pages/Educator/MyCourses'
import StudentsEnrolled from './pages/Educator/StudentsEnrolled'
import Navbar from './components/students/Navbar'


const App = () => {
  const isEductorRoute=useMatch('/educator/*')

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEductorRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path='/course/:id' element={<CourseDetails />} />      
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>
        <Route path='/educator' element={<Educator/>}>
            <Route path='educator' element={<DashBoard />} />
            <Route path='add-course' element={<AddCourse />} />
            <Route path='my-courses' element={<MyCourses />} />
            <Route path='Student-enrolled' element={<StudentsEnrolled />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
