import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const { user } = useContext(AuthContext);
    const updateToy = useLoaderData(); 

    const handleupdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const updatedToy = {
            pictureUrl: form.pictureUrl.value || updateToy.pictureUrl,
            name: form.name.value || updateToy.name,
            sellerName: form.sellerName.value || updateToy.sellerName,
            sellerEmail: form.sellerEmail.value || updateToy.sellerEmail,
            subCategory: form.subCategory.value || updateToy.subCategory,
            price: form.price.value || updateToy.price,
            rating: form.rating.value || updateToy.rating,
            quantity: form.quantity.value || updateToy.quantity,
            description: form.description.value || updateToy.description,
        };

        fetch(`http://localhost:5000/update/${updateToy._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Successfully updated the toy",
                        icon: "success"
                    });
                }
            })
            .catch(error => {
                console.error('Error updating toy:', error);
                Swal.fire({
                    title: "Error",
                    text: "Failed to update toy",
                    icon: "error"
                });
            });
    };

    return (
        <div>
            <div className="max-w-2xl mx-auto mt-10 p-6 bg-purple-100 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Update Toy</h2>
                <form onSubmit={handleupdateToy} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Picture URL</label>
                        <input
                            type="text"
                            name="pictureUrl"
                            defaultValue={updateToy.pictureUrl}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter the picture URL"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={updateToy.name}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter toy name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Seller Name</label>
                        <input
                            type="text"
                            name="sellerName"
                            defaultValue={user?.displayName || updateToy.sellerName}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter seller name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Seller Email</label>
                        <input
                            type="email"
                            name="sellerEmail"
                            defaultValue={user?.email || updateToy.sellerEmail}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter seller email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Sub-category</label>
                        <input
                            type="text"
                            name="subCategory"
                            defaultValue={updateToy.subCategory}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter toy sub-category"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            defaultValue={updateToy.price}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter price"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rating</label>
                        <input
                            type="number"
                            name="rating"
                            defaultValue={updateToy.rating}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter rating (0-5)"
                            min="0"
                            max="5"
                            step="0.1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Available Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            defaultValue={updateToy.quantity}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter available quantity"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Detail Description</label>
                        <textarea
                            name="description"
                            defaultValue={updateToy.description}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter a detailed description of the toy"
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Update Toy
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;
