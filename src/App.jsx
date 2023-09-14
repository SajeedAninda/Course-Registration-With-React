import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllCourses from './Components/AllCourses/AllCourses'
import CourseCart from './Components/CourseCart/CourseCart'

function App() {

  return (
    <div>
      <h1 className="text-[#1C1B1B] font-bold text-3xl my-8 text-center">Course Registration</h1>
      <div className="flex w-[90%] mx-auto gap-5">
        <div className="w-[75%] mb-4">
          <AllCourses></AllCourses>
        </div>
        <div className='w-[25%] mb-4'>
          <CourseCart></CourseCart>
        </div>
      </div>
    </div>
  )
}

export default App
