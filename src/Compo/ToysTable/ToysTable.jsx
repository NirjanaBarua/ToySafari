import { FaRegStar } from "react-icons/fa";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';

const ToysTable = ({ toy, serial }) => {
    const { _id, name, sellerName, subCategory, price, quantity } = toy;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleViewDetails = () => {
        if (user) {
            navigate(`/singletoy/${_id}`);
        } else {
            navigate('/login', { state: { from: `/singletoy/${_id}` } });
        }
    };

    return (
        <tr className="hover:bg-gray-100 text-center">
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
                <button onClick={handleViewDetails} className="bg-purple-400 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200">
                    View Details
                </button>
            </td>
        </tr>
    );
};

export default ToysTable;
