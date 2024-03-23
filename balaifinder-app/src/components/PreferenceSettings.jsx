import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { backendurl } from "../../backend-connector";

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
    bedroom: "",
    bathroom: "",
    familysize: "",
    typeoflot: "",
  });
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [resultsData, setResultsData] = useState([]);

  const loadData = async () => {
    const [locationResponse, typeResponse, priceResponse] = await Promise.all([
      axios.get(`${ backendurl }/api/get/option/location`),
      axios.get(`${ backendurl }/api/get/option/type`),
      axios.get(`${ backendurl }/api/get/option/price`),
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
    e.stopPropagation();
  
    // Validate form data
    if (
      Object.values(formData).some((value) => value === "")
    ) {
      toast.error("Please fill out all fields");
      return;
    }
  
    try {
      const response = await axios.post(`${backendurl}/api/post/submitpreferences`, formData);
      setResultsData(response.data);
      setShowResultsModal(true);
      if (onSubmit) {
        onSubmit(response.data); // <-- Update the state in the parent component
      }
    } catch (error) {
      console.log("Error submitting preferences:", error);
      toast.error("Failed to submit preferences. Please try again.");
    }
  };
  

  const handleCloseResultsModal = () => {
    setShowResultsModal(false);
  };

  return (
    <>
    <ToastContainer />
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 bg-background p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-w-6xl border-0 shadow-lg rounded-3xl">
          <div className="">
            <button onClick={onClose} className="px-2 py-2 shadow-md border absolute top-2 right-2">
              <GrClose />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="px-16 py-8 space-y-8 bg-white">
            <div className="text-center mb-4">
              <h1 className="text-3xl font-semibold">Setup your Preferences</h1>
              <p className="text-gray-600 text-base">Let us know what property you want.</p>
            </div>
            <div className="grid grid-cols-2 gap-y-8 gap-x-24">
              <div className="space-y-2 flex flex-col">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-full text-center uppercase">Price</label>
                <select name="price" value={formData.price} onChange={handleChange} className="flex h-10 w-full items-center justify-between bg-background px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 rounded-full border-sky-500 border-[3px]">
                  <option selected disabled hidden value="">Please Select</option>
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
            <select name="location" value={formData.location} onChange={handleChange} className="flex h-10 w-full items-center justify-between bg-background px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 rounded-full border-sky-500 border-[3px]">
                <option selected disabled hidden value="">Please Select</option>
                {locationData.map((item, index) => (
                <option key={index} value={item.location}>{item.location}</option>
                ))}
            </select>
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Type of Property</label>
            <select name="house_type" value={formData.house_type} onChange={handleChange} className="flex h-10 w-full items-center justify-between bg-background px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 rounded-full border-sky-500 border-[3px]">
                <option selected disabled hidden value="">Please Select</option>
                {typeData.map((item, index) => (
                <option key={index} value={item.type}>{item.type}</option>
                ))}
            </select>
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Near a Mall?</label>
            <select name="near_mall" value={formData.mall} onChange={handleChange} className="flex h-10 w-full items-center justify-between bg-background px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 rounded-full border-sky-500 border-[3px]">
                <option selected disabled hidden value="">Please Select</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
            </select>
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Near a School?</label>
            <select name="near_school" value={formData.near_school} onChange={handleChange} className="flex h-10 w-full items-center justify-between bg-background px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 rounded-full border-sky-500 border-[3px]">
                <option selected disabled hidden value="">Please Select</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
            </select>
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Near a Church?</label>
            <select name="near_church" value={formData.near_church} onChange={handleChange} className="flex h-10 w-full items-center justify-between bg-background px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 rounded-full border-sky-500 border-[3px]">
                <option selected disabled hidden value="">Please Select</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
            </select>
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Number of Bedrooms</label>
            <select name="bedroom" value={formData.bedroom} onChange={handleChange} className="flex h-10 w-full items-center justify-between bg-background px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 rounded-full border-sky-500 border-[3px]">
                <option selected disabled hidden value="">Please Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Number of Bathrooms</label>
            <select name="bathroom" value={formData.bathroom} onChange={handleChange} className="flex h-10 w-full items-center justify-between bg-background px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 rounded-full border-sky-500 border-[3px]">
                <option selected disabled hidden value="">Please Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Family Size</label>
            <select name="familysize" value={formData.familysize} onChange={handleChange} className="flex h-10 w-full items-center justify-between bg-background px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 rounded-full border-sky-500 border-[3px]">
                <option selected disabled hidden value="">Please Select</option>
                <option value="Small">1 - 3</option>
                <option value="Medium">4 - 6</option>
                <option value="Large">7- 10</option>
                <option value="Extended">10 Above</option>
            </select>
        </div>
        <div className="flex flex-col mb-4">
            <label className="text-center uppercase">Lot Type</label>
            <select name="typeoflot" value={formData.typeoflot} onChange={handleChange} className="flex h-10 w-full items-center justify-between bg-background px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 rounded-full border-sky-500 border-[3px]">
                <option selected disabled hidden value="">Please Select</option>
                <option value="End Lot">End Lot</option>
                <option value="Intersection Lot">Intersection Lot</option>
                <option value="Through Lot">Through Lot</option>
                <option value="Corner Lot">Corner Lot</option>
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
            {/* Check if resultsData is an array before mapping */}
            {Array.isArray(resultsData) ? (
              <ul>
                {resultsData.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            ) : (
              <p>Preferences Set Success</p>
            )}
        </div>
  </div>
)}

    </>
  );
}

export default PreferenceSettings;
