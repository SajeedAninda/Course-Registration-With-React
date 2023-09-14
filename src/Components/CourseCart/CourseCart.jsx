import CartDetails from "../CartDetails/CartDetails";

export default function CourseCart({ courseName, totalCreditHours, remainingCreditHours }) {
    return (
        <div>
            <CartDetails courseName={courseName} totalCreditHours={totalCreditHours} remainingCreditHours={remainingCreditHours}></CartDetails>
        </div>
    )
}