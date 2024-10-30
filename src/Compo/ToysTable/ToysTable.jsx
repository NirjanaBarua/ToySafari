import { FaRegStar } from "react-icons/fa";

const ToysTable = ({ toy, serial }) => {
    const { name, sellerName, subCategory, price, quantity } = toy;

    return (
        <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border border-gray-300 bg-gray-100">
                <div className="flex items-center space-x-2">
                    <FaRegStar />
                    <span>{serial}</span>
                </div>
            </td>
            <td className="px-4 py-2 border border-gray-300">{sellerName}</td>
            <td className="px-4 py-2 border border-gray-300">{name}</td>
            <td className="px-4 py-2 border border-gray-300">{subCategory}</td>
            <td className="px-4 py-2 border border-gray-300">${price}</td>
            <td className="px-4 py-2 border border-gray-300">{quantity}</td>
            <td className="px-4 py-2 border border-gray-300">
                <button className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200">
                    View Details
                </button>
            </td>
        </tr>
    );
};

export default ToysTable;
