import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { backendurl } from "../../backend-connector";


function ScoringSettings({ onClose, onSubmit }) {
  const [rangeValues, setRangeValues] = useState({
    location: 0,
    type: 0,
    price: 0,
    nearelementary: 0,
    nearhighschool: 0,
    nearcollege: 0,
    nearmall: 0,
    nearchurch: 0,
    bedroom: 0,
    bathroom: 0,
    familysize: 0,
    businessready: 0,
    lottype: 0
  });

  const [submitDisabled, setSubmitDisabled] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRangeValues({
      ...rangeValues,
      [name]: parseFloat(value)
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backendurl}/api/post/submitpriority`, rangeValues);
      console.log(response.data.message);
      toast.success("Preferences submitted successfully");
    } catch (error) {
      console.error("Error submitting preferences:", error);
      toast.error("Error submitting preferences");
    }
  };

  const totalValue = Object.values(rangeValues).reduce((acc, val) => acc + val, 0);

  useEffect(() => {
    if (totalValue < 98 || totalValue > 100) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [totalValue]);

  return (
    <>
    <ToastContainer />
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 bg-background p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-w-6xl border-0 shadow-lg rounded-3xl">
          <form onSubmit={handleSubmit} className="px-16 py-8 space-y-8 bg-white text-center">
            <div className="">
              <button onClick={onClose} className="px-2 py-2 shadow-md border absolute top-2 right-2">
                <GrClose />
              </button>
            </div>                                
            <div className="text-center mb-4">
              <h1 className="text-3xl font-semibold">Setup your Priority</h1>
              <p className="text-gray-600 text-base">For Higher Algorithm Accuracy Please Adjust Ranges in Total of 98 to 100%</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group">
                <label>Location:</label>
                <input type="range" name="location" min="0" 
                max={100 - (
                  rangeValues.type 
                  + rangeValues.price 
                  + rangeValues.nearelementary 
                  + rangeValues.nearhighschool 
                  + rangeValues.nearcollege 
                  + rangeValues.nearmall 
                  + rangeValues.nearchurch 
                  + rangeValues.bedroom 
                  + rangeValues.bathroom 
                  + rangeValues.familysize 
                  + rangeValues.businessready 
                  + rangeValues.lottype)} 
                step="0.1" value={rangeValues.location} onChange={handleChange}/>
                <input type="number" name="location" min="0" max="100" step="0.1" value={rangeValues.location} onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label>Property Type</label>
                <input type="range" name="type" min="0" 
                max={100 - (
                  rangeValues.location 
                  + rangeValues.price 
                  + rangeValues.nearelementary 
                  + rangeValues.nearhighschool 
                  + rangeValues.nearcollege 
                  + rangeValues.nearmall 
                  + rangeValues.nearchurch 
                  + rangeValues.bedroom 
                  + rangeValues.bathroom 
                  + rangeValues.familysize 
                  + rangeValues.businessready 
                  + rangeValues.lottype)}
                step="0.1" value={rangeValues.type} onChange={handleChange}/>
                <input type="number" name="type" min="0" max="100" step="0.1" value={rangeValues.type} onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label>Price</label>
                <input type="range" name="price" min="0" 
                max={100 - (
                  rangeValues.location 
                  + rangeValues.type 
                  + rangeValues.nearelementary 
                  + rangeValues.nearhighschool 
                  + rangeValues.nearcollege 
                  + rangeValues.nearmall 
                  + rangeValues.nearchurch 
                  + rangeValues.bedroom 
                  + rangeValues.bathroom 
                  + rangeValues.familysize 
                  + rangeValues.businessready 
                  + rangeValues.lottype)}
                step="0.1" 
                value={rangeValues.price} 
                onChange={handleChange}/>
                <input type="number" name="price" min="0" max="100" step="0.1" value={rangeValues.price} onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label>Near Elementary School</label>
                <input type="range" name="nearelementary" min="0" 
                max={100 - (
                  rangeValues.location 
                  + rangeValues.type 
                  + rangeValues.price 
                  + rangeValues.nearhighschool 
                  + rangeValues.nearcollege 
                  + rangeValues.nearmall 
                  + rangeValues.nearchurch 
                  + rangeValues.bedroom 
                  + rangeValues.bathroom 
                  + rangeValues.familysize 
                  + rangeValues.businessready 
                  + rangeValues.lottype)}
                step="0.1" value={rangeValues.nearelementary} onChange={handleChange}/>
                <input type="number" name="nearelementary" min="0" max="100" step="0.1" value={rangeValues.nearelementary} onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label>Near High School</label>
                <input type="range" name="nearhighschool" min="0" 
                max={100 - (
                  rangeValues.location 
                  + rangeValues.type 
                  + rangeValues.price 
                  + rangeValues.nearelementary
                  + rangeValues.nearcollege 
                  + rangeValues.nearmall 
                  + rangeValues.nearchurch 
                  + rangeValues.bedroom 
                  + rangeValues.bathroom 
                  + rangeValues.familysize 
                  + rangeValues.businessready 
                  + rangeValues.lottype)}
                step="0.1" value={rangeValues.nearhighschool} onChange={handleChange}/>
                <input type="number" name="nearhighschool" min="0" max="100" step="0.1" value={rangeValues.nearhighschool} onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label>Near College University</label>
                <input type="range" name="nearcollege" min="0" 
                max={100 - (
                  rangeValues.location 
                  + rangeValues.type 
                  + rangeValues.price
                  + rangeValues.nearelementary
                  + rangeValues.nearhighschool
                  + rangeValues.nearmall 
                  + rangeValues.nearchurch 
                  + rangeValues.bedroom 
                  + rangeValues.bathroom 
                  + rangeValues.familysize 
                  + rangeValues.businessready 
                  + rangeValues.lottype)}
                step="0.1" value={rangeValues.nearcollege} onChange={handleChange}/>
                <input type="number" name="nearcollege" min="0" max="100" step="0.1" value={rangeValues.nearcollege} onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label>Near Commercial Spaces/Mall</label>
                <input type="range" name="nearmall" min="0" 
                max={100 - (
                  rangeValues.location 
                  + rangeValues.type 
                  + rangeValues.price 
                  + rangeValues.nearelementary
                  + rangeValues.nearhighschool
                  + rangeValues.nearcollege
                  + rangeValues.nearchurch 
                  + rangeValues.bedroom 
                  + rangeValues.bathroom 
                  + rangeValues.familysize 
                  + rangeValues.businessready 
                  + rangeValues.lottype)}
                step="0.1" value={rangeValues.nearmall} onChange={handleChange}/>
                <input type="number" name="nearmall" min="0" max="100" step="0.1" value={rangeValues.nearmall} onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label>Near Church</label>
                <input type="range" name="nearchurch" min="0" 
                max={100 - (
                  rangeValues.location 
                  + rangeValues.type 
                  + rangeValues.price 
                  + rangeValues.nearelementary
                  + rangeValues.nearhighschool
                  + rangeValues.nearcollege
                  + rangeValues.nearmall
                  + rangeValues.bedroom 
                  + rangeValues.bathroom 
                  + rangeValues.familysize 
                  + rangeValues.businessready 
                  + rangeValues.lottype)}
                step="0.1" value={rangeValues.nearchurch} onChange={handleChange}/>
                <input type="number" name="nearchurch" min="0" max="100" step="0.1" value={rangeValues.nearchurch} onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label>Number of Bedrooms</label>
                <input type="range" name="bedroom" min="0" 
                max={100 - (
                  rangeValues.location 
                  + rangeValues.type 
                  + rangeValues.price 
                  + rangeValues.nearelementary
                  + rangeValues.nearhighschool
                  + rangeValues.nearcollege
                  + rangeValues.nearmall
                  + rangeValues.nearchurch
                  + rangeValues.bathroom 
                  + rangeValues.familysize 
                  + rangeValues.businessready 
                  + rangeValues.lottype)}
                step="0.1" value={rangeValues.bedroom} onChange={handleChange}/>
                <input type="number" name="bedroom" min="0" max="100" step="0.1" value={rangeValues.bedroom} onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label>Number of Bathroom</label>
                <input type="range" name="bathroom" min="0" 
                max={100 - (
                  rangeValues.location 
                  + rangeValues.type 
                  + rangeValues.price 
                  + rangeValues.nearelementary
                  + rangeValues.nearhighschool
                  + rangeValues.nearcollege
                  + rangeValues.nearmall
                  + rangeValues.nearchurch
                  + rangeValues.nearmall
                  + rangeValues.familysize 
                  + rangeValues.businessready 
                  + rangeValues.lottype)}
                step="0.1" value={rangeValues.bathroom} onChange={handleChange}/>
                <input type="number" name="bathroom" min="0" max="100" step="0.1" value={rangeValues.bathroom} onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label>Family Size</label>
                <input type="range" name="familysize" min="0"
                max={100 - (
                  rangeValues.location 
                  + rangeValues.type 
                  + rangeValues.price 
                  + rangeValues.nearelementary
                  + rangeValues.nearhighschool
                  + rangeValues.nearcollege
                  + rangeValues.nearmall
                  + rangeValues.nearchurch
                  + rangeValues.nearmall
                  + rangeValues.bathroom
                  + rangeValues.businessready 
                  + rangeValues.lottype)}
                step="0.1" value={rangeValues.familysize} onChange={handleChange}/>
                <input type="number" name="familysize" min="0" max="100" step="0.1" value={rangeValues.familysize} onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label>Business Space Ready</label>
                <input type="range" name="businessready" min="0"
                max={100 - (
                  rangeValues.location 
                  + rangeValues.type 
                  + rangeValues.price 
                  + rangeValues.nearelementary
                  + rangeValues.nearhighschool
                  + rangeValues.nearcollege
                  + rangeValues.nearmall
                  + rangeValues.nearchurch
                  + rangeValues.nearmall
                  + rangeValues.bathroom
                  + rangeValues.familysize
                  + rangeValues.lottype)}     
                step="0.1" value={rangeValues.businessready} onChange={handleChange}/>
                <input type="number" name="businessready" min="0" max="100" step="0.1" value={rangeValues.businessready} onChange={handleChange}/>
              </div>
              <div className="input-group">
                <label>Lot Type</label>
                <input type="range" name="lottype" min="0" 
                max={100 - (
                  rangeValues.location 
                  + rangeValues.type 
                  + rangeValues.price 
                  + rangeValues.nearelementary
                  + rangeValues.nearhighschool
                  + rangeValues.nearcollege
                  + rangeValues.nearmall
                  + rangeValues.nearchurch
                  + rangeValues.nearmall
                  + rangeValues.bathroom
                  + rangeValues.familysize
                  + rangeValues.businessready)}
                step="0.1" value={rangeValues.lottype} onChange={handleChange}/>
                <input type="number" name="lottype" min="0" max="100" step="0.1" value={rangeValues.lottype} onChange={handleChange}/>
              </div>
            </div>
          <label>Total Value: {totalValue}</label>
          <button type="submit" disabled={submitDisabled} className={`mx-auto mt-8 block py-2 w-96 rounded ${submitDisabled ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white font-bold'}`}>SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ScoringSettings;
