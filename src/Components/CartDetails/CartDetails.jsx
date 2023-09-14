export default function CartDetails({ courseName, totalCreditHours, remainingCreditHours, coursePrice }) {
    return (
        <div>
            <div className="details p-4 bg-white rounded-2xl">
                <div className="border-b border-gray-300 py-4">
                    <h3 className="font-bold text-[#2F80ED] text-base">Credit Hour Remaining {remainingCreditHours} hr</h3>
                </div>
                <div className="py-4 border-b border-gray-300">
                    <h2 className="text-[#1C1B1B] text-lg font-bold pb-2">Course Name</h2>
                    <ol className="text-[#1c1b1b99] list-decimal ml-5">
                        {courseName.map((coursesList, idx) => <li key={idx}>{coursesList.title}</li>)}
                    </ol>
                </div>
                <div className="py-4 border-b border-gray-300">
                    <h3 className="text-[#1c1b1b99] font-medium">Total Credit Hours: {totalCreditHours}</h3>
                </div>
                <div className="py-4">
                    <h3 className="text-[#1c1b1b99] font-bold">Total Price : {coursePrice} USD</h3>
                </div>
            </div>
        </div>
    )
}