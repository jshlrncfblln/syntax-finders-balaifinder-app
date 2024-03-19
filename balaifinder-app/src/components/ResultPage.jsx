import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './Footer';

function ResultPage() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get('http://localhost:8800/api/get');
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-10">
            We matched your
            <span className="text-sky-500"> Ideal Home </span>
            according to your preferences
          </h1>
        </div>
      </div>

      <section className="w-fit mx-auto grid grid-cols lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-10">
        {data.map((item, index) => (
          <div key={item._id} className="w-72 bg-white shadow-md rounded-xl hover:shadow-sky-600 duration-500 hover:scale-105 hover:shadow-xl">
            <a href="/property-details">
              <img src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1710318322~exp=1710321922~hmac=1797b6b00add732c13f15b3160cb99f3c7e6fe2e9fb745a53d801c74a968fe8b&w=1380" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
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
            </a>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default ResultPage;
