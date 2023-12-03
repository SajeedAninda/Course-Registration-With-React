## Course Registration Web Application
This is a web application built with ReactJS and Tailwind CSS that allows users to register for courses, track their selected courses, and view their total credit hours and course prices.
## Features
- User-friendly interface for course registration.
- Display of available courses with details.
- Real-time calculation of total credit hours and course prices.
- Error handling for duplicate course selection and insufficient credits.
- Responsive design for various screen sizes.

## State-Management
The React state hooks are essential for keeping the application's state and making sure that changes to the user's course choices are reflected in the user interface (UI). In this particular project a total of 5 states were used.

- courses: This state was used to store the data that was fetched from the json using the useEffect hook and to configure the data in the function for later use. This state was used in the AllCourses component and was passed to the SingleCourse component, which iterated and displayed all data as Card. <br />
let [courses, setCourses] = useState([]);

- courseName: This state is used to store an array of courses that have been selected. When a user hits the "Select" button to add a course, the course data is updated. This state was used in the App Component and was passed as a prop to the CartDetails component via props drilling so that it could be looped through and display selected card names when clicked. <br />
let [courseName, setCourseName] = useState([]);

- totalCreditHours: This state keeps track of the total credit hours for all of the courses selected. When a course is added, it is updated. This state was used in the App Component and was passed as a prop to the CartDetails component via props drilling, where it displayed the total credits hours of the courses when clicked. <br />
let [totalCreditHours, setTotalCreditHours] = useState(0);

- remainingCreditHours: This state represents the number of remaining credit hours from which a user can choose. It is initially set to 20 and is updated based on the credit hours of the selected courses. This state was used in the App Component and was given as a prop to the CartDetails component via props drilling to display the total remaining credits when the selected course button was clicked. <br />
let [remainingCreditHours, setRemainingCreditHours] = useState(20);

- coursePrice: This state variable, like totalCreditHours, tracks the total price of all selected courses while adding them. It is updated as new courses are added. This state was used in the App Component and was sent as a prop to the CartDetails component via props drilling to display total course pricing when the selected button of courses was clicked. <br />
let [coursePrice, setCoursePrice] = useState(0);

## Live-Link
https://course-registration-sajeed.netlify.app/
