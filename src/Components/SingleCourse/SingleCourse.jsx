import { FiDollarSign } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';
export default function SingleCourse({ courses, handleSelectBtn }) {
    let {title, image, description, price, credit_hours } = courses;
    return (
        <div>
            <div className="card p-4 space-y-3 bg-white rounded-2xl">
                <img className="w-full" src={image} alt="" />
                <h2 className="text-[#1C1B1B] text-base font-semibold">{title}</h2>
                <p className="text-xs text-[#1c1b1b99] text-justify">{description}</p>
                <div className="flex justify-between items-center">
                    <div className="price text-xs font-medium text-[#1c1b1b99] flex items-center gap-2">
                        <div className="text-lg text-[#1C1B1B]">
                            <FiDollarSign></FiDollarSign>
                        </div>
                        <p className="text-sm">Price: {price}</p>
                    </div>
                    <div className="credit text-xs font-medium text-[#1c1b1b99] flex items-center gap-2">
                        <div className="text-xl text-[#1C1B1B]">
                            <HiOutlineBookOpen></HiOutlineBookOpen>
                        </div>
                        <p className="text-sm">Credit: {credit_hours}hr</p>
                    </div>
                </div>
                <button onClick={() => handleSelectBtn(courses)} className="w-full py-2 bg-[#2F80ED] hover:bg-blue-400 rounded-xl text-white">Select</button>
            </div>
        </div>
    )
}