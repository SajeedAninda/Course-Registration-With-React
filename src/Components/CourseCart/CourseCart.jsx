import CartDetails from "../CartDetails/CartDetails";

export default function CourseCart({ courseName }) {
    return (
        <div>
            <CartDetails courseName={courseName}></CartDetails>
        </div>
    )
}