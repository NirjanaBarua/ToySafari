import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
    const toy = useLoaderData();
    const { name, sellerName, sellerEmail, price, rating, quantity, description, picture } = toy;

    console.log(toy)

    return (
        <div className="p-8 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
            <img src={picture} alt={name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="text-gray-600">Seller: {sellerName} ({sellerEmail})</p>
            <p className="text-lg font-semibold text-green-600 mb-2">Price: ${price}</p>
            <p className="text-lg text-yellow-500">Rating: {rating}</p>
            <p className="text-gray-600 mb-2">Available Quantity: {quantity}</p>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default SingleToy;
