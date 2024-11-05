import { FaStar } from "react-icons/fa";

const SubCategory = ({ toy }) => {
    return (
        <div className="card lg:card-side bg-base-100 hover:bg-base-200 shadow-2xl mt-6 mb-6">
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
                    <button className="bg-purple-500  px-4 py-3 mt-4 rounded-md hover:bg-purple-600 text-white font-semibold" onClick={() => document.getElementById('my_modal_5').showModal()}> 
                        View Details
                    </button>
                    
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Please go to All Toys and click view details!!!</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn bg-purple-500 hover:bg-purple-600 text-white">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>


        </div>





    );
};

export default SubCategory;
