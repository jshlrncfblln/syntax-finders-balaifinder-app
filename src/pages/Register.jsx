import { useState } from "react";
import { Link } from 'react-router-dom'
import regionsData from '../components/json/regions.json';
import provincesData from '../components/json/provinces.json';
import municipalitiesData from '../components/json/municipalities.json';



export default function Register() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        address: "",
        region: "",
        province: "",
        municipality: ""
    });
    const [errors, setErrors] = useState({});
    const [step, setStep] = useState(1);

    const validateStep = () => {
        let valid = true;
        const newErrors = { ...errors };

        if (step === 1) {
            if (!formData.first_name) {
                newErrors.first_name = "First Name is required";
                valid = false;
            }
            if (!formData.last_name) {
                newErrors.last_name = "Last Name is required";
                valid = false;
            }
        } else if (step === 2) {
            if (!formData.address) {
                newErrors.address = "Address is required";
                valid = false;
            }
            if (!formData.region) {
                newErrors.region = "Region is required";
                valid = false;
            }
            if (!formData.province) {
                newErrors.province = "Province is required";
                valid = false;
            }
            if (!formData.municipality) {
                newErrors.municipality = "Municipality is required";
                valid = false;
            }
        } else if (step === 3) {
            if (!formData.email) {
                newErrors.email = "Email is required";
                valid = false;
            }
            if (!formData.password) {
                newErrors.password = "Password is required";
                valid = false;
            } else if (
                !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}/.test(formData.password)
            ) {
                newErrors.password =
                    "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and be at least 6 characters long";
                valid = false;
            }
            if (formData.confirm_password.trim() !== formData.password.trim()) {
                newErrors.confirm_password = "Passwords do not match";
                valid = false;
            }
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFormData = {
            ...formData,
            [name]: value
        }

        const newErrors = {
            ...errors,
            [name]: undefined // this will remove the errors for the input fields
        }


        setFormData(newFormData)
        setErrors(newErrors)
        console.log(errors)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep()) {
            if (step === 3) {
                console.log(formData); // Form submission logic goes here
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
    const provinces = provincesData.filter(province => province.reg_code === formData.region);
    const municipalities = municipalitiesData.filter(municipality => municipality.prov_code === formData.province);

    return (
        <div className="py-16 bg-gray-200 h-screen justify-center">
            <div className="flex bg-white rounded-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl shadow-xl shadow-sky-600 relative">
                <div className="hidden lg:block lg:w-1/2 bg-contain bg-no-repeat mt-24 bg-[url('./src/assets/register.svg')]"></div>
                <Link to="/">
                    <div className="absolute top-0 right-0 m-4 cursor-pointer">
                        <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                </Link>
                <form onSubmit={handleSubmit} className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">BalaiFinder</h2>

                    {/** this is for the step 1 process */}
                    {step === 1 && (
                        <>
                            <p className="text-xl text-gray-600 text-center">Step 1: Personal Information</p>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                                <input type="text" value={formData.first_name} onChange={handleChange} name="first_name" className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.first_name ? 'border-red-600' : formData.first_name ? 'border-green-500' : ''}`} />
                                {errors.first_name && <div className="text-red-600 text-xs">{errors.first_name}</div>}
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                                <input type="text" name="last_name" className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.last_name ? 'border-red-500' : formData.last_name ? 'border-green-500' : ''}`} value={formData.last_name} onChange={handleChange} />
                                {errors.last_name && <div className="text-red-600 text-xs">{errors.last_name}</div>}
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Birthdate</label>
                                <input type="date" name="birthdate" className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none`} />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                                <select name="gender" className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none `}>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <p className="text-xl text-gray-600 text-center">Step 2: Address Information</p>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Residential Address</label>
                                <input name="address" type="text" value={formData.address} onChange={handleChange} className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.address ? 'border-red-500' : formData.address ? 'border-green-500' : ''}`}>
                                </input>
                                {errors.address && <div className="text-red-600 text-xs">{errors.address}</div>}
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Region</label>
                                <select name="region" value={formData.region} onChange={handleChange} className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.region ? 'border-red-500' : formData.region ? 'border-green-500' : ''}`}>
                                    <option value="">Select Region</option>
                                    {regions.map(region => (
                                        <option key={region.reg_code} value={region.reg_code}>{region.name}</option>
                                    ))}
                                </select>
                                {errors.region && <div className="text-red-600 text-xs">{errors.region}</div>}
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Province</label>
                                <select name="province" value={formData.province} onChange={handleChange} className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.province ? 'border-red-500' : ''}`}>
                                    <option value="">Select Province</option>
                                    {provinces.map(province => (
                                        <option key={province.prov_code} value={province.prov_code}>{province.name}</option>
                                    ))}
                                </select>
                                {errors.province && <div className="text-red-600 text-xs">{errors.province}</div>}
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Municipality</label>
                                <select name="municipality" value={formData.municipality} onChange={handleChange} className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.province ? 'border-red-500' : ''}`}>
                                    <option value="">Select Municipality</option>
                                    {municipalities.map(municipality => (
                                        <option key={municipality.mun_code} value={municipality.mun_code}>{municipality.name}</option>
                                    ))}
                                </select>
                    {errors.municipality && <div className="text-red-600 text-xs">{errors.municipality}</div>}
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <p className="text-xl text-gray-600 text-center">Step 3: Account Creation</p>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input name="email" type="email" className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.email ? 'border-red-500' : ''}`} value={formData.email} onChange={handleChange} />
                                {errors.email && <div className="text-red-600 text-xs">{errors.email}</div>}
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Create Password</label>
                                <input name="password" type="password" className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.password ? 'border-red-500' : ''}`} value={formData.password} onChange={handleChange} />
                                {errors.password && <div className="text-red-600 text-xs">{errors.password}</div>}
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                                <input name="confirm_password" type="password" className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.confirm_password ? 'border-red-500' : ''}`} value={formData.confirm_password} onChange={handleChange} />
                                {errors.confirm_password && <div className="text-red-600 text-xs">{errors.confirm_password}</div>}
                            </div>
                        </>
                    )}
                    <div className="mt-8 flex gap-4">
                        {step > 1 && (
                            <button type="button" onClick={handlePrevious} className="bg-gray-300 text-gray-700 font-bold py-2 px-5 rounded hover:bg-gray-400">Previous</button>
                        )}
                        <button type="submit" className="bg-sky-700 text-white font-bold py-2 px-5 rounded hover:bg-sky-500">{step === 3 ? 'Create Account' : 'Next'}</button>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                        <span className="border-b border-gray-500 w-1/5 md:w-1/4"></span>
                        <Link to="/login">
                            <p className="text-xs text-gray-500 uppercase" >Or Login Account</p>
                        </Link>
                        <span className="border-b border-gray-500 w-1/5 md:w-1/4"></span>
                    </div>
                </form>
            </div>
        </div>
    );
}
