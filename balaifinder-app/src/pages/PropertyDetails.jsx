// components/ProductDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { backendurl } from "../../backend-connector";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const PropertyDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  const fetchProductById = async (id) => {
    try {
      const response = await axios.get(`${backendurl}/api/get/properties/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log("Error while fetching product by ID:", error);
    }
  };

  if (!product || Object.keys(product).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar/>
      <div class="bg-gray-100 dark:bg-gray-800 py-8">
              <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div class="flex flex-col md:flex-row -mx-4">
                      <div class="md:flex-1 px-4">
                          <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                              <img
                                  class="w-full h-full object-cover"
                                  src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                  alt="Product Image"
                              />
                          </div>
                          <div class="flex -mx-2 mb-4">
                              <div class="w-1/2 px-2">
                                  <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                      ACCEPT
                                  </button>
                              </div>
                              <div class="w-1/2 px-2">
                                  <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                                      DENY
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div class="md:flex-1 px-4">
                          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h2>
                          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                              ADDRESS:
                          </p>
                          <div class="flex mb-4">
                              <div class="mr-4">
                                  <span class="font-bold text-gray-700 dark:text-gray-300">Price = </span>
                                  <span class="text-gray-600 dark:text-gray-300">₱ {new Intl.NumberFormat().format(product.price)}</span>
                              </div>
                              <div>
                                  <span class="font-bold text-gray-700 dark:text-gray-300">Location = </span>
                                  <span class="text-gray-600 dark:text-gray-300">{product.location}</span>
                              </div>
                          </div>
                          <div class="flex mb-4">
                              <div class="mr-4">
                                  <span class="font-bold text-gray-700 dark:text-gray-300">Number of Bedroom = </span>
                                  <span class="text-gray-600 dark:text-gray-300">{product.numberofbedroom}</span>
                              </div>
                              <div>
                                  <span class="font-bold text-gray-700 dark:text-gray-300">Number of Bathroom = </span>
                                  <span class="text-gray-600 dark:text-gray-300">{product.numberofbathroom}</span>
                              </div>
                          </div>
                          <div class="flex mb-4">
                              <div class="mr-4">
                                  <span class="font-bold text-gray-700 dark:text-gray-300">Near an Elementary School = </span>
                                  <span class="text-gray-600 dark:text-gray-300">{product.nearelementary}</span>
                              </div>
                              <div>
                                  <span class="font-bold text-gray-700 dark:text-gray-300">Near a HighSchool = </span>
                                  <span class="text-gray-600 dark:text-gray-300">{product.nearhighschool}</span>
                              </div>
                          </div>
                          <div class="flex mb-4">
                              <div class="mr-4">
                                  <span class="font-bold text-gray-700 dark:text-gray-300">Near a College University = </span>
                                  <span class="text-gray-600 dark:text-gray-300">{product.nearcollege}</span>
                              </div>
                              <div>
                                  <span class="font-bold text-gray-700 dark:text-gray-300">Near a HighSchool = </span>
                                  <span class="text-gray-600 dark:text-gray-300">{product.numberofbathroom}</span>
                              </div>
                          </div>
                          <div class="flex mb-4">
                              <div class="mr-4">
                                  <span class="font-bold text-gray-700 dark:text-gray-300">Family Size = </span>
                                  <span class="text-gray-600 dark:text-gray-300">{product.familysize}</span>
                              </div>
                              <div>
                                  <span class="font-bold text-gray-700 dark:text-gray-300">Monthly Installment = </span>
                                  <span class="text-gray-600 dark:text-gray-300">{product.monthly}</span>
                              </div>
                          </div>
                          <div class="flex mb-4">
                              <div class="mr-4">
                                  <span class="font-bold text-gray-700 dark:text-gray-300">Type of Lot = </span>
                                  <span class="text-gray-600 dark:text-gray-300">{product.typeoflot}</span>
                              </div>
                              <div>
                                  <span class="font-bold text-gray-700 dark:text-gray-300">Business Space Ready = </span>
                                  <span class="text-gray-600 dark:text-gray-300">{product.plantodobusiness}</span>
                              </div>
                          </div>
                          <div>
                              <span class="font-bold text-gray-700 dark:text-gray-300">Description:</span>
                              <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">{product.description}</p>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
        <Footer/>
    </div>
  );
};

export default PropertyDetails;