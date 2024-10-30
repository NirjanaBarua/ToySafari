import { FaStar } from "react-icons/fa";

const SubCategory = ({ toy }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-2xl mt-6 mb-6">
            <figure>
                <img className="w-80 h-80 "
                    src={toy.picture}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold mt-4 mb-8">{toy.name}</h2>
                <p className="text-lg font-semibold text-purple-600 ">${toy.price}</p>
                <p className="text-yellow-500 font-semibold flex items-center space-x-2 "> <FaStar></FaStar><span>{toy.rating}</span></p>
                <div >
                <hr className="border-t border-gray-400" />
                    <button className="bg-purple-500  px-4 py-3 mt-4 rounded-md hover:bg-purple-600 text-white font-semibold">
                        View Details
                    </button>
                </div>
            </div>


        </div>





    );
};

export default SubCategory;
