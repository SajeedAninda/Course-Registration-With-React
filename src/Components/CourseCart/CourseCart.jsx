import CartDetails from "../CartDetails/CartDetails";

export default function CourseCart({ courseName, totalCreditHours, remainingCreditHours, coursePrice }) {
    return (
        <div>
            <CartDetails courseName={courseName} totalCreditHours={totalCreditHours} remainingCreditHours={remainingCreditHours} coursePrice={coursePrice}></CartDetails>
        </div>
    )
}