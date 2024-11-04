import { useLoaderData } from "react-router-dom";
import ToysTable from "../ToysTable/ToysTable";
import { useState } from "react";

const AllToys = () => {
    const toys = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const filteredData = toys.filter(toy =>
        toy.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div>

            <h1 className="font-bold text-center px-4 py-2 min-w-full table-auto border-collapse border border-gray-300 bg-green-400">All Toys</h1>
            <div className="mt-6 flex justify-center">
                <input type="text"
                    placeholder="Search by Toy Name"
                    className="input input-bordered w-24 md:w-auto "
                    value={searchQuery}
                    onChange={(event) => {
                        setSearchQuery(event.target.value);
                        setCurrentPage(1);
                    }} />
                <button onClick={() => {
                    console.log("Search clicked with query:", searchQuery);
                }} type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-green-500 rounded-lg border border-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-500">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>


            <div className="container  mt-10 px-2">
                <div className="overflow-x-auto">
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
                            {currentItems.map((toy, index) => (
                                <ToysTable
                                    key={toy._id}
                                    toy={toy}
                                    serial={(currentPage - 1) * itemsPerPage + index + 1}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="join mt-6 mb-6 flex justify-center">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        className={`join-item btn btn-square ${currentPage === i + 1 ? "bg-green-500 text-white" : ""}`}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default AllToys;
