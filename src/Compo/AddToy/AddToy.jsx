import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Slide } from "react-awesome-reveal";


const AddToy = () => {

    const { user } = useContext(AuthContext);
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const pictureUrl = form.pictureUrl.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const newToy = { pictureUrl,sellerId: user.uid, name, sellerName, sellerEmail, subCategory, price, rating, quantity, description };
        console.log(newToy);

        fetch('http://localhost:5000/addtoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Successfully added a toy",
                        icon: "success"
                    });
                }
            }
            )
    }
    return (
        <div >
            <hr className="hr-gradient"/>
            <div className="max-w-2xl mx-auto mt-10 p-6 bg-purple-100 rounded-lg shadow-lg mb-6">
            <Slide direction="down"><h2 className="text-center anton-sc-regular">Add A Toy</h2></Slide>
                <form onSubmit={handleAddToy} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Picture URL</label>
                        <input
                            type="text"
                            name="pictureUrl"

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter the picture URL"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter toy name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Seller Name</label>
                        <input
                            type="text"
                            name="sellerName"

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter seller name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Seller Email</label>
                        <input
                            type="email"
                            name="sellerEmail"

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter seller email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Sub-category</label>
                        <input
                            type="text"
                            name="subCategory"

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter toy sub-category"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter price"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rating</label>
                        <input
                            type="number"
                            name="rating"

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

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter available quantity"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Detail Description</label>
                        <textarea
                            name="description"

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter a detailed description of the toy"
                            rows="4"
                        ></textarea>
                    </div>
                    <div  className="flex justify-center">
                    <button
                        type="submit"
                        className="flex justify-center bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
                    >
                        Add Toy
                    </button>
                    </div>
                    
                    
                </form>
            </div>
        </div>
    );
};

export default AddToy;