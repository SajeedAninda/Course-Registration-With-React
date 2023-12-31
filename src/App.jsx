import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllCourses from './Components/AllCourses/AllCourses'
import CourseCart from './Components/CourseCart/CourseCart'
import toast, { Toaster } from "react-hot-toast";

function App() {
  let [courseName, setCourseName] = useState([]);
  let [totalCreditHours, setTotalCreditHours] = useState(0);
  let [remainingCreditHours, setRemainingCreditHours] = useState(20);
  let [coursePrice, setCoursePrice] = useState(0);

  let handleSelectBtn = (courses) => {
    let ifCourseExists = courseName.find(courseName => courseName.id === courses.id);
    let creditHours = courses.credit_hours;
    let price = courses.price;

    if (ifCourseExists) {
      toast.error("This Course Already Exists")
    }
    else {
      courseName.forEach(credits => {
        creditHours = creditHours + credits.credit_hours;
      });
      courseName.forEach(prices => {
        price = price + prices.price;
      })
      let remainingCredits = 20 - creditHours;
      if (creditHours > 20) {
        toast.error("Not Enough Credits")
      }
      else {
        setTotalCreditHours(creditHours);
        setRemainingCreditHours(remainingCredits);
        setCoursePrice(price);
        let newCourseName = [...courseName, courses];
        setCourseName(newCourseName);
      }

    }
  }

  return (
    <div>
      <h1 className="text-[#1C1B1B] font-bold text-3xl my-8 text-center">Course Registration</h1>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex flex-col-reverse md:flex-row w-[90%] mx-auto gap-5">
        <div className="w-full md:w-[65%] lg:w-[75%] mb-4">
          <AllCourses handleSelectBtn={handleSelectBtn}></AllCourses>
        </div>
        <div className='w-full md:w-[35%] lg:w-[25%] mb-4'>
          <CourseCart courseName={courseName} totalCreditHours={totalCreditHours} remainingCreditHours={remainingCreditHours} coursePrice={coursePrice}></CourseCart>
        </div>
      </div>
    </div>
  )
}

export default App
