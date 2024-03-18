import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {toast} from "react-toastify"
import axios from "axios"

function MatchUp(){
        const [locationData, setLocationData] = useState([]);
        const [typeData, setTypeData] = useState([]);
        const [priceData, setPriceData] = useState([]);
      
        const loadData = async () => {
          const [locationResponse, typeResponse, priceResponse  ] = await Promise.all([
            axios.get('http://localhost:8800/api/get/option/location'),
            axios.get('http://localhost:8800/api/get/option/type'),
            axios.get('http://localhost:8800/api/get/option/price'),
          ]);
        
          setLocationData(locationResponse.data);
          setTypeData(typeResponse.data);
          setPriceData(priceResponse.data);
        };
      
        
        useEffect(() => {
          loadData();
        }, []);

    return(
        <div>
            <Navbar />
            <form
    onSubmit={(e) => {
        e.preventDefault();
        console.log(new FormData(e.currentTarget));
    }}
    className="w-full pb-16"
>
    <div className="grid grid-cols-2 gap-y-8 gap-x-24">
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Price</label>
            <select id="option-price" name="price" defaultValue="" className="border-sky-500 border-[3px] rounded-full">
                <option disabled hidden value="">Select</option>
                {priceData.map((item, index) => (
                    <option key={index} value={item.price}>{item.price}</option>
                ))}
            </select>
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Location</label>
            <select id="option-location" name="location" defaultValue="" className="border-sky-500 border-[3px] rounded-full">
                <option disabled hidden value="">Select</option>
                {locationData.map((item, index) => (
                <option key={index} value={item.location}>{item.location}</option>
                ))}
            </select>
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Type of Property</label>
            <select id="option-type" name="house_type" defaultValue="" className="border-sky-500 border-[3px] rounded-full">
                <option disabled hidden value="">Select House Type</option>
                {typeData.map((item, index) => (
                <option key={index} value={item.type}>{item.type}</option>
                ))}
            </select>
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Near a Mall?</label>
            <select name="propertySize" defaultValue="" className="border-sky-500 border-[3px] rounded-full">
                <option disabled hidden value="">Select</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
            </select>
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Near a School?</label>
            <select name="typeOfProperty" defaultValue="" className="border-sky-500 border-[3px] rounded-full">
                <option disabled hidden value="">Select</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
            </select>
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Near a Church?</label>
            <select name="typeOfNeighborhood" defaultValue="" className="border-sky-500 border-[3px] rounded-full">
                <option disabled hidden value="">Select</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
            </select>
        </div>
    </div>
    <button type="submit" className="mx-auto mt-8 block bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Submit
    </button>
</form>
            <Footer />
        </div>
    )
}
export default MatchUp