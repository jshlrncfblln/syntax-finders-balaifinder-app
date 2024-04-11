import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import regionsData from "../components/json/regions.json";
import provincesData from "../components/json/provinces.json";
import municipalitiesData from "../components/json/municipalities.json";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    bday: "",
    email: "",
    password: "",
    confirm_password: "",
    address: "",
    region: "",
    province: "",
    municipality: "",
  });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);

  const [err, setErr] = useState(null);

  const validateStep = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (step === 1) {
      if (!inputs.first_name) {
        newErrors.first_name = "First Name is required";
        valid = false;
      }
      if (!inputs.last_name) {
        newErrors.last_name = "Last Name is required";
        valid = false;
      }
    } else if (step === 2) {
      if (!inputs.address) {
        newErrors.address = "Address is required";
        valid = false;
      }
      if (!inputs.region) {
        newErrors.region = "Region is required";
        valid = false;
      }
      if (!inputs.province) {
        newErrors.province = "Province is required";
        valid = false;
      }
      if (!inputs.municipality) {
        newErrors.municipality = "Municipality is required";
        valid = false;
      }
    } else if (step === 3) {
      if (!inputs.email) {
        newErrors.email = "Email is required";
        valid = false;
      }
      if (!inputs.password) {
        newErrors.password = "Password is required";
        valid = false;
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}/.test(inputs.password)) {
        newErrors.password =
          "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and be at least 6 characters long";
        valid = false;
      }
      if (inputs.confirm_password.trim() !== inputs.password.trim()) {
        newErrors.confirm_password = "Passwords do not match";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined, // this will remove the errors for the input fields
    }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    if (validateStep()) {
      // Validate the current step
      try {
        await axios.post(
          "https://balaifinder-backend-deploy.onrender.com/api/auth/register",
          inputs
        );
        navigate("/");
        toast.success('Registration successful! Welcome to BalaiFinder.');
      } catch (err) {
        setErr(err.response.data);
      }
    }
  };

  console.log(err);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      if (step === 3) {
        console.log(inputs); // Form submission logic goes here
      } else {
        setStep(step + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const regions = regionsData;
  const provinces = provincesData.filter(
    (province) => province.reg_code === inputs.region
  );
  const municipalities = municipalitiesData.filter(
    (municipality) => municipality.prov_code === inputs.province
  );

  return (
    <div className="py-16 bg-gray-200 justify-center">
      <div className="flex bg-white rounded-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl relative border border-black">
        <div className="hidden items-center justify-center text-center lg:flex lg:flex-col lg:w-1/2">
          <h2 className="text-4xl mt-4 font-bold text-gray-700">
              Balai<span className="text-sky-500">Finder</span>
          </h2>
          <img src="/assets/Balaifinder.png" className="object-center object-cover" alt="Balaifinder Logo"/>
        </div>
          <Link to="/">
            <div className="absolute top-0 right-0 m-4 cursor-pointer hover:border hover:shadow-md">
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </Link>
          <form onSubmit={handleSubmit} className="w-full p-8 lg:w-1/2">
            {/** this is for the step 1 process */}
            {step === 1 && (
              <>
                <p className="text-xl text-gray-600 text-center">
                  Step 1: Personal Information
                </p>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={inputs.first_name}
                    onChange={handleChange}
                    className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
                      errors.first_name
                        ? "border-red-600"
                        : inputs.first_name
                        ? "border-green-500"
                        : ""
                    }`}
                  />
                  {errors.first_name && (
                    <div className="text-red-600 text-xs">
                      {errors.first_name}
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={inputs.last_name}
                    onChange={handleChange}
                    className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
                      errors.last_name
                        ? "border-red-500"
                        : inputs.last_name
                        ? "border-green-500"
                        : ""
                    }`}
                  />
                  {errors.last_name && (
                    <div className="text-red-600 text-xs">{errors.last_name}</div>
                  )}
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Birthdate
                  </label>
                  <input
                    type="date"
                    name="bday"
                    value={inputs.bday}
                    onChange={handleChange}
                    className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none`}
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={inputs.gender}
                    onChange={handleChange}
                    className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none `}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <p className="text-xl text-gray-600 text-center">
                  Step 2: Address Information
                </p>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Residential Address
                  </label>
                  <input
                    name="address"
                    type="text"
                    value={inputs.address}
                    onChange={handleChange}
                    className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
                      errors.address
                        ? "border-red-500"
                        : inputs.address
                        ? "border-green-500"
                        : ""
                    }`}
                  />
                  {errors.address && (
                    <div className="text-red-600 text-xs">{errors.address}</div>
                  )}
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Region
                  </label>
                  <select
                    name="region"
                    value={inputs.region}
                    onChange={handleChange}
                    className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
                      errors.region
                        ? "border-red-500"
                        : inputs.region
                        ? "border-green-500"
                        : ""
                    }`}
                  >
                    <option value="">Select Region</option>
                    {regions.map((region) => (
                      <option key={region.reg_code} value={region.reg_code}>
                        {region.name}
                      </option>
                    ))}
                  </select>
                  {errors.region && (
                    <div className="text-red-600 text-xs">{errors.region}</div>
                  )}
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Province
                  </label>
                  <select
                    name="province"
                    value={inputs.province}
                    onChange={handleChange}
                    className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
                      errors.province ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Select Province</option>
                    {provinces.map((province) => (
                      <option key={province.prov_code} value={province.prov_code}>
                        {province.name}
                      </option>
                    ))}
                  </select>

                  {errors.province && (
                    <div className="text-red-600 text-xs">{errors.province}</div>
                  )}
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Municipality
                  </label>
                  <select
                    name="municipality"
                    value={inputs.municipality}
                    onChange={handleChange}
                    className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
                      errors.province ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Select Municipality</option>
                    {municipalities.map((municipality) => (
                      <option
                        key={municipality.mun_code}
                        value={municipality.mun_code}
                      >
                        {municipality.name}
                      </option>
                    ))}
                  </select>
                  {errors.municipality && (
                    <div className="text-red-600 text-xs">
                      {errors.municipality}
                    </div>
                  )}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <p className="text-xl text-gray-600 text-center">
                  Step 3: Account Creation
                </p>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={inputs.email}
                    onChange={handleChange}
                    className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <div className="text-red-600 text-xs">{errors.email}</div>
                  )}
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Create Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    value={inputs.password}
                    onChange={handleChange}
                    className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />

                  {errors.password && (
                    <div className="text-red-600 text-xs">{errors.password}</div>
                  )}
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                  <input
                    name="confirm_password"
                    type="password"
                    value={inputs.confirm_password}
                    onChange={handleChange}
                    className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
                      errors.confirm_password ? "border-red-500" : ""
                    }`}
                  />
                  {errors.confirm_password && (
                    <div className="text-red-600 text-xs">
                      {errors.confirm_password}
                    </div>
                  )}
                </div>
                <div className="mt-8 flex gap-4">
                  {err && err}
                  <button
                    type="submit"
                    onClick={handleClick}
                    className="bg-sky-700 text-white font-bold py-2 px-5 rounded hover:bg-sky-500"
                  >
                    Create Account
                  </button>
                </div>
              </>
            )}
            <div className="mt-8 flex gap-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="bg-gray-300 text-gray-700 font-bold py-2 px-5 rounded hover:bg-gray-400"
                >
                  Previous
                </button>
              )}
              {step < 3 && (
                <button
                  type="submit"
                  className="bg-sky-700 text-white font-bold py-2 px-5 rounded hover:bg-sky-500"
                >
                  Next
                </button>
              )}
            </div>
            <div className="mt-5 flex items-center justify-between"></div>
          </form>
      </div>
    </div>
  );
};

export default Register;
