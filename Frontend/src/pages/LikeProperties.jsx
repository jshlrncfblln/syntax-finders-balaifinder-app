import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import ApplyModal from '../components/BuyerApplicationModal';
import { backendurl } from "../../backend-connector";

const PropertyCheckoutPage = () => {
  const [likes, setlikes] = useState([]);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  useEffect(() => {
      fetchlikes();
  }, []);

  const fetchlikes = async () => {
      try {
          const response = await fetch(`${backendurl}/api/get/likes`);
          if (!response.ok) {
              throw new Error('Failed to fetch User likes');
          }
          const data = await response.json();
          setlikes(data);
      } catch (error) {
          console.error('Error fetching likes:', error);
      }
  };

  const openApplyModal = (propertyId) => {
    setIsApplyModalOpen(true);
    setSelectedPropertyId(propertyId); // Set selected property_id
};


  const closeApplyModal = () => {
      setIsApplyModalOpen(false);
  };
      

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow shadow-md overflow-hidden shadow-md shadow-black outline outline-1 sm:rounded-lg mx-4 md:mx-10 mt-8 mb-24">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {likes.map((property, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <img src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={property.name} className="h-16 w-16 object-cover" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{property.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{property.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{property.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{property.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">₱ {new Intl.NumberFormat().format(property.price)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs">PENDING</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button className="text-indigo-600 hover:text-indigo-900">View</button>
                  <button onClick={() => openApplyModal(property.id)} className="text-green-600 hover:text-green-900 ml-2">Apply</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
      <ApplyModal isOpen={isApplyModalOpen} onClose={closeApplyModal} propertyId={selectedPropertyId} />
    </div>
  );
};

export default PropertyCheckoutPage;
