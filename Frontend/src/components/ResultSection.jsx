import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { backendurl } from "../../backend-connector";

function ResultSection() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [firstRender, setFirstRender] = useState(true); // FIX TOASTIFY OVER POPULATING THE SCREEN WITH NO RESULT

  const loadData = async () => {
    try {
      const response = await axios.get(`${backendurl}/api/get`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error loading data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(); // Load data initially
    const intervalId = setInterval(loadData, 5000); // Refresh data every 5 seconds (adjust interval as needed)

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  //useEffect(() => {
    //if (data.length === 0 && firstRender) {
      //toast.info("Algorithm Busy");
      //setFirstRender(false);                    //TO DELETE
    //}
  //}, [data, firstRender]);

  return (
    <>
      <ToastContainer />
      {data.length > 0 ? (
        <section className="w-fit mx-auto grid grid-cols lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-10">
           {data.slice(0, 5).map((item, index) => (
            <div key={item.id} className="w-72 bg-white shadow-md outline outline-1 shadow-black rounded-xl duration-500 hover:scale-105">
              <Link to={`/details/${item.id}`}>
                <img src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1710318322~exp=1710321922~hmac=1797b6b00add732c13f15b3160cb99f3c7e6fe2e9fb745a53d801c74a968fe8b&w=1380" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">{item.type}</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">{item.name}</p>
                  <p className="text-lg font-bold text-black truncate block capitalize">{item.location}</p>
                  <p className="text-lg font-bold text-black truncate block capitalize">Match Percentage ={(item.score * 100).toFixed(0)}%</p>

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
        </section>
      ) : null}
    </>
  );
}

export default ResultSection;
