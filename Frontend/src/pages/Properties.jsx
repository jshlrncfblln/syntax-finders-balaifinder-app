import { useState } from 'react';
import Navbar from '../components/navbar';
import PropLists from '../components/PropertyList';
import Footer from '../components/Footer';

function Properties() {
    const [priceFilter, setPriceFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [propertyTypeFilter, setPropertyTypeFilter] = useState('');
    const [page, setPage] = useState(1);
    const limit = 20; // Limit to 20 results per page

    const handlePriceFilterChange = (event) => {
        setPriceFilter(event.target.value);
    };

    const handleLocationFilterChange = (event) => {
        setLocationFilter(event.target.value);
    };

    const handlePropertyTypeFilterChange = (event) => {
        setPropertyTypeFilter(event.target.value);
    };

    const handleSearch = () => {
        if (priceFilter) {
            filterByPrice();
        } else if (locationFilter) {
            filterByLocation();
        } else if (propertyTypeFilter) {
            filterByPropertyType();
        }
        // Reset page to 1 when searching
        setPage(1);
    };

    const filterByPrice = () => {
        // Implement logic to filter by price
        console.log('Filtering by price');
    };

    const filterByLocation = () => {
        // Implement logic to filter by location
        console.log('Filtering by location');
    };

    const filterByPropertyType = () => {
        // Implement logic to filter by property type
        console.log('Filtering by property type');
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className="bg-center bg-cover bg-opacity-50" style={{ backgroundImage: `url('https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>{/**Make this bg image position properly */}
                    <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-black font-bold leading-10">
                                Looking for
                                <span className="text-sky-500"> Ideal Home </span>
                                for your family?
                            </h1>
                        </div>
                        <div className="flex gap-2 w-11/12 md:w-8/12 xl:w-6/12">
                            <select
                                className="w-1/3 p-3 rounded-md rounded-md border border-2 border-sky-300 text-sm"
                                value={priceFilter}
                                onChange={handlePriceFilterChange}
                            >
                                <option value=""disabled selected hidden>Select Price Range</option>
                                <option value="filterByPrice">Ascending</option>
                                <option value="filterByPriceDesc">Descending</option>
                            </select>
                            <select
                                className="w-1/3 p-3 rounded-md border border-2 border-sky-300 text-sm"
                                value={locationFilter}
                                onChange={handleLocationFilterChange}
                            >
                                <option value=""disabled selected hidden>Select Location</option>
                                <option value="filterByLocation">Location 1</option>
                                <option value="filterByLocation2">Location 2</option>
                            </select>
                            <select
                                className="w-1/3 p-3 rounded-md rounded-md border border-2 border-sky-300 text-sm"
                                value={propertyTypeFilter}
                                onChange={handlePropertyTypeFilterChange}
                            >
                                <option value=""disabled selected hidden>Property Type</option>
                                <option value="filterByPropertyType">Type 1</option>
                                <option value="filterByPropertyType2">Type 2</option>
                            </select>
                            <button
                                className="inline-flex items-center gap-2 bg-sky-500 text-white text-lg font-semibold py-3 px-6 rounded-md hover:shadow-md hover:shadow-black"
                                onClick={handleSearch}
                            >
                                <span>Find</span>
                                <svg
                                    className="text-gray-200 h-5 w-5 p-0 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 56.966 56.966"
                                    style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                                    xmlSpace="preserve"
                                >
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23 s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Pass page and limit props to PropLists */}
                <div>
                    <PropLists
                        page={page}
                        limit={limit}
                        priceFilter={priceFilter}
                        locationFilter={locationFilter}
                        propertyTypeFilter={propertyTypeFilter}
                        setPage={setPage} // Pass setPage function
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Properties;
