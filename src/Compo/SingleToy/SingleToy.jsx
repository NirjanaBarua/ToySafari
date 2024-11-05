import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
    const toy = useLoaderData();
    const { name, sellerName, sellerEmail, price, rating, quantity, description, pictureUrl } = toy;

    console.log(toy)

    return (
        <div>
            <hr className="hr-gradient" />
        
        <div className="p-8 max-w-xl mx-auto bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md m-4">
            <div className="flex justify-center">
            <img src={pictureUrl} alt={name} className="w-72 h-72 object-cover rounded-md mb-4 " />
            </div>
            
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className=" text-lg text-gray-900">Seller: {sellerName} </p>
            <p className="text-lg font-semibold text-green-600 mb-2">Price: ${price}</p>
            <p className="text-lg text-yellow-500">Rating: {rating}</p>
            <p className="text-lg text-gray-900 mb-2">Available Quantity: {quantity}</p>
            <p className="text-gray-700">{description}</p>
        </div>
        </div>
    );
};

export default SingleToy;
