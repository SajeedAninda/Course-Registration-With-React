import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllCourses from './Components/AllCourses/AllCourses'

function App() {

  return (
    <div>
      <h1 className="text-[#1C1B1B] font-bold text-3xl my-6 text-center">Course Registration</h1>
      <AllCourses></AllCourses>
    </div>
  )
}

export default App
