import { useEffect, useState } from "react"

export default function AllCourses() {
    let [AllCourses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./CourseData.json")
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (
        <div>

        </div>
    )
}