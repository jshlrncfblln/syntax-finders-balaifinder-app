import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { backendurl } from '../../../backend-connector';

const EditPropertyModal = ({ isOpen, onClose, onEditProperty, propertyToEdit }) => {
  const [step, setStep] = useState(1);
  const [property, setProperty] = useState(propertyToEdit);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setProperty(propertyToEdit);
  }, [propertyToEdit]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setProperty((prevProperty) => ({
        ...prevProperty,
        [name]: files[0]
      }));
    } else {
      setProperty((prevProperty) => ({
        ...prevProperty,
        [name]: value
      }));
    }
  };

  useEffect(() => {
    // Check if all required fields are filled
    const isStep1Valid = property.name && property.type && property.price && property.location && property.status;
    const isStep2Valid = property.numBathrooms && property.numRooms && property.familySize && property.propertyType;
    setFormValid(step === 1 ? isStep1Valid : isStep2Valid);
  }, [property, step]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      handleUpdateProperty();
    }
  };

  const handleUpdateProperty = async () => {
    try {
      await axios.put(
        `${backendurl}/api/crud/updproperties/${propertyId}`,
        property
      );
      Navigate("/realtor/manage-property");
      toast.success('Property Updated Successfully.');
    } catch (err) {
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="outline outline-1 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl shadow-black transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form onSubmit={handleSubmit}>
            <h1 className='font-bold text-center text-3xl m-4'>PROPERTY DETAILS</h1>
            <p className='text-gray-500 text-center text-xl m-2'>{step === 1 ? 'General Details' : 'Other Details'}</p>
            {step === 1 && (
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Property Name</label>
                  <input type="text" id="name" name="name" value={property.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">Property Type</label>
                  <input type="text" id="type" name="type" value={property.type} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Property Price</label>
                  <input type="text" id="price" name="price" value={property.price} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Property Address</label>
                  <input type="text" id="location" name="location" value={property.location} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Property Status</label>
                  <select id="status" name="status" value={property.status} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="mb-4">
                  <label htmlFor="numBathrooms" className="block text-gray-700 text-sm font-bold mb-2">Number of Bathrooms</label>
                  <select id="numBathrooms" name="numBathrooms" value={property.numBathrooms} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="numRooms" className="block text-gray-700 text-sm font-bold mb-2">Number of Rooms</label>
                  <select id="numRooms" name="numRooms" value={property.numRooms} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="familySize" className="block text-gray-700 text-sm font-bold mb-2">Family Size</label>
                  <select id="familySize" name="familySize" value={property.familySize} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="propertyType" className="block text-gray-700 text-sm font-bold mb-2">Property Type</label>
                  <select id="propertyType" name="propertyType" value={property.propertyType} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="image1" className="block text-gray-700 text-sm font-bold mb-2">Image 1</label>
                  <input type="file" id="image1" name="image1" accept="image/*" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label htmlFor="image2" className="block text-gray-700 text-sm font-bold mb-2">Image 2</label>
                  <input type="file" id="image2" name="image2" accept="image/*" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label htmlFor="image3" className="block text-gray-700 text-sm font-bold mb-2">Image 3</label>
                  <input type="file" id="image3" name="image3" accept="image/*" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
              </div>
            )}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              {step === 1 && (
                <button type="button" onClick={() => setStep(2)} className="hover:shadow-md hover:shadow-blackw-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-500 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Next
                </button>
              )}
              {step === 2 && (
              <>
                <button type="submit" onClick={handleSubmit} disabled={!formValid} className={`hover:shadow-md hover:shadow-black w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-500 text-base font-medium text-white ${formValid ? 'hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500' : 'cursor-not-allowed bg-gray-300 text-gray-600'} sm:ml-3 sm:w-auto sm:text-sm`}>
                  Save Changes
                </button>
                <button type="button" onClick={() => setStep(1)} className="hover:shadow-md hover:shadow-black mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Back
                </button>
              </>
            )}
              <button onClick={onClose} type="button" className="hover:shadow-md hover:shadow-black mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPropertyModal;
