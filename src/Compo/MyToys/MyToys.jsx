import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = ({ myToy }) => {

    const { _id,name, pictureUrl, price, quantity } = myToy;

    const handleDelete = _id => {

        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`http://localhost:5000/mytoys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }
                    )

            }

        });
    }




    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md mb-6">

            <div className="flex items-center justify-between p-4 border-b border-gray-300">
                <div className="flex items-center">
                    <img src={pictureUrl} alt="" className="w-16 h-16 object-cover rounded" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">{name }</h3>
                        <p className="text-gray-600">Price: ${price}</p>
                        <p className="text-gray-600">Quantity: {quantity}</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <Link to={`/update/${_id}`}>
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                            Update
                        </button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        Delete
                    </button>
                </div>
            </div>

        </div>
    );
};

export default MyToys;
