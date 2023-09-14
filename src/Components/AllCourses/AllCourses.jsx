import { useEffect, useState } from "react"
import SingleCourse from "../SingleCourse/SingleCourse";

export default function AllCourses() {
    let [AllCourses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./CourseData.json")
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <SingleCourse></SingleCourse>
        </div>
    )
}