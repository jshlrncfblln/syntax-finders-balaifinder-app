import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendurl } from "../../backend-connector";
import {Link} from "react-router-dom"

export default function PropLists({ page, limit, priceFilter, locationFilter, propertyTypeFilter, setPage }) {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    const loadData = async () => {
        try {
            console.log('Loading data...');
            const response = await axios.get(`${backendurl}/api/get/properties`);
            console.log('Data loaded successfully:', response.data);
            setData(response.data);
            setTotalPages(Math.ceil(response.data.length / limit));
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    useEffect(() => {
        console.log('Effect triggered, loading data...');
        loadData();
    }, [page, limit, priceFilter, locationFilter, propertyTypeFilter]);

    const filteredData = data.filter(item => {
        if (priceFilter && item.price !== parseFloat(priceFilter)) return false;
        if (locationFilter && item.location !== locationFilter) return false;
        if (propertyTypeFilter && item.type !== propertyTypeFilter) return false;
        return true;
    });

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const currentData = filteredData.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className="w-fit mx-auto mt-10 mb-10">
            <div className="grid grid-cols lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-6 gap-x-4">
                {currentData.map((item, index) => (
                    <div key={index} className="w-72 bg-white shadow-md shadow-black outline outline-1 rounded-xl duration-500 hover:scale-105">
                        <Link to="/details/:id">
                            <img src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">{item.type}</span>
                                <p className="text-lg font-bold text-black truncate block capitalize">{item.name}</p>
                                <p className="text-lg font-bold text-black truncate block capitalize">{item.location}</p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">₱{new Intl.NumberFormat().format(item.price)}</p>
                                    <div className="ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="mb-4 flex justify-center space-x-4" aria-label="Pagination" style={{ marginTop: "20px" }}>
                <button
                    disabled={page === 1}
                    onClick={() => handlePageChange(page - 1)}
                    className={`rounded-lg border border-teal-500 px-2 py-2 text-gray-700 ${page === 1 ? 'cursor-not-allowed' : ''}`}
                >
                    <span className="sr-only">Previous</span>
                    <svg className="mt-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </button>
                {Array.from({ length: totalPages > 5 ? 5 : totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(page + index)}
                        className={`rounded-lg border border-teal-500 px-4 py-2 text-gray-700 ${page === page + index ? 'bg-teal-500 text-white' : ''}`}
                    >
                        {page + index}
                    </button>
                ))}
                <button
                    disabled={page === totalPages}
                    onClick={() => handlePageChange(page + 1)}
                    className={`rounded-lg border border-teal-500 px-2 py-2 text-gray-700 ${page === totalPages ? 'cursor-not-allowed' : ''}`}
                >
                    <span className="sr-only">Next</span>
                    <svg className="mt-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
