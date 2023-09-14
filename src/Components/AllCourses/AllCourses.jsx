import { useEffect, useState } from "react"
import SingleCourse from "../SingleCourse/SingleCourse";

export default function AllCourses({handleSelectBtn}) {
    let [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./CourseData.json")
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                courses.map((courses, idx) => <SingleCourse key={idx} courses={courses} handleSelectBtn={handleSelectBtn}></SingleCourse>)
            }
        </div>
    )
}