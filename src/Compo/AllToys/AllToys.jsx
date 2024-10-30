import { useLoaderData } from "react-router-dom";
import ToysTable from "../ToysTable/ToysTable";

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div>

            <h1 className="font-bold text-center px-4 py-2 min-w-full table-auto border-collapse border border-gray-300 bg-green-400">All Toys</h1>
            <div className="mt-6 flex justify-end">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto " />
            </div>
            

            <div className="container mx-auto mt-10">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border border-gray-300">Serial</th>
                            <th className="px-4 py-2 border border-gray-300">Seller</th>
                            <th className="px-4 py-2 border border-gray-300">Toy Name</th>
                            <th className="px-4 py-2 border border-gray-300">Sub-Category</th>
                            <th className="px-4 py-2 border border-gray-300">Price</th>
                            <th className="px-4 py-2 border border-gray-300">Available Quantity</th>
                            <th className="px-4 py-2 border border-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy, index) => (
                            <ToysTable
                                key={toy._id}
                                toy={toy}
                                serial={index + 1}>

                            </ToysTable>

                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;
