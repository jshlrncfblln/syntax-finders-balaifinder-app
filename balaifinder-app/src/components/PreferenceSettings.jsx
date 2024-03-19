import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import axios from "axios";

function PreferenceSettings({ onClose, onSubmit }) {
  const [locationData, setLocationData] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const [formData, setFormData] = useState({
    price: "",
    location: "",
    house_type: "",
    near_mall: "",
    near_school: "",
    near_church: "",
  });
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [resultsData, setResultsData] = useState([]);

  const loadData = async () => {
    const [locationResponse, typeResponse, priceResponse] = await Promise.all([
      axios.get("http://localhost:8800/api/get/option/location"),
      axios.get("http://localhost:8800/api/get/option/type"),
      axios.get("http://localhost:8800/api/get/option/price"),
    ]);

    setLocationData(locationResponse.data);
    setTypeData(typeResponse.data);
    setPriceData(priceResponse.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8800/api/get/results", formData);
    setResultsData(response.data);
    setShowResultsModal(true);
  };

  const handleCloseResultsModal = () => {
    setShowResultsModal(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 rounded-md shadow-md relative">
          <div>
            <button onClick={onClose} className="px-2 py-2 shadow-md border absolute top-2 right-2">
              <GrClose />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="text-center mb-4">
              <h1 className="text-3xl font-semibold">Setup your Preferences</h1>
              <p className="text-gray-600 text-base">Let us know what property you want.</p>
            </div>
            <div className="grid grid-cols-2 gap-y-8 gap-x-24">
              <div className="flex flex-col mb-4">
                <label className="text-center uppercase">Price</label>
                <select
                  id="option-price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="border-sky-500 border rounded-lg py-2"
                >
                  <option disabled hidden value="">
                    Select Property House
                  </option>
                  {priceData.map((item, index) => (
                    <option key={index} value={item.price}>
                      {item.price}
                    </option>
                  ))}
                </select>
              </div>
              {/* Other select elements */}
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
        </div>
      </div>

      {showResultsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md relative">
            <button onClick={handleCloseResultsModal} className="px-2 py-2 shadow-md border absolute top-2 right-2">
              <GrClose />
            </button>
            <h1 className="text-3xl font-semibold">Results</h1>
            {/* Display results here */}
            <ul>
              {resultsData.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default PreferenceSettings;
