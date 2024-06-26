import React, { useState } from 'react';
import { backendurl } from '../../backend-connector';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyModal = ({ isOpen, onClose, propertyId }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    idImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendurl}/api/post/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          propertyId: propertyId,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        }),
      });
  
      // Check if the response is successful
      if (response.ok) {
        console.log('Application submitted successfully');
        onClose();
        toast.success('Application has been sent!', {
          position: 'top-right',
          autoClose: 3000, // Close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        // Handle the case where the response is not successful
        const responseData = await response.json();
        if (responseData.message === 'You already applied') {
          toast.error('You already applied please wait for realtor to assess your application', {
            position: 'top-right',
            autoClose: 3000, // Close after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          throw new Error('Failed to submit application');
        }
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="outline outline-1 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl shadow-black transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h1 className='font-bold text-center text-3xl m-4'>Want this Property?</h1>
              <h2 className="text-sm text-center text-gray-500 mb-2">Complete the form below to apply for this property</h2>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="idImage" className="block text-gray-700 text-sm font-bold mb-2">Upload ID Image</label>
                <input type="file" id="idImage" name="idImage" accept="image/*" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="submit" className="hover:shadow-md hover:shadow-black w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-500 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:ml-3 sm:w-auto sm:text-sm">
                Apply
              </button>
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

export default ApplyModal;
