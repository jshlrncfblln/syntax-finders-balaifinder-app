import {Link} from 'react-router-dom'
import { useState } from 'react';
import { LuEye, LuEyeOff } from "react-icons/lu"



export default function RealtorRegister(){
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    return(
        <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <img class="mx-auto h-24 w-auto" src="/assets/Balaifinder.png" alt="Workflow"/>
                <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Create a New Account
                </h2>
                <p class="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                    Or
                    <Link to="/realtor/"
                        class="ml-1 font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        Login to Your Account
                    </Link>
                </p>
            </div>

            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div class="bg-white py-8 px-4 shadow-md shadow-black outline outline-1  sm:rounded-lg sm:px-10">
                    <form method="POST" action="#">
                        <h1 className='font-bold text-xl mb-4'>Personal Details</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className=''>
                                <label htmlFor="firstname" className="block text-sm font-semibold leading-5 text-gray-700">First Name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="firstname" name="firstname" type="text" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <label htmlFor="lastname" className="block text-sm font-semibold leading-5 text-gray-700">Last Name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="lastname" name="lastname" type="text" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6">
                            <label for="email" class="block text-sm font-bold leading-5  text-gray-700">
                                Gender
                            </label>
                            <div className='mt-1 relative rounded-md shadow-sm'>
                                <select id='gender' name='gender' required='' className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'>
                                    <option value='' disabled selected>Select Gender</option>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='other'>Other</option>
                                </select>
                                <div className='hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                                    <svg className='h-5 w-5 text-red-500' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z' clipRule='evenodd'></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h1 className='font-bold text-xl mt-4'>Account Creation</h1>
                        <div class="mt-6">
                            <label for="email" class="block text-sm font-medium leading-5  text-gray-700">
                                Email address
                            </label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <input id="email" name="email" placeholder="user@example.com" type="email" required="" value="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                            <div className=''>
                                <label htmlFor='password' className='block text-sm font-bold leading-5 text-gray-700'>Password</label>
                                <div className='mt-1 relative rounded-md shadow-sm'>
                                    <input
                                        id='password'
                                        name='password'
                                        type={showPassword ? 'text' : 'password'}
                                        required=''
                                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                                    />
                                    <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
                                        {showPassword ? (
                                            <LuEyeOff
                                                className='h-5 w-5 text-gray-400 cursor-pointer'
                                                onClick={togglePasswordVisibility}
                                            />
                                        ) : (
                                            <LuEye
                                                className='h-5 w-5 text-gray-400 cursor-pointer'
                                                onClick={togglePasswordVisibility}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <label htmlFor='password_confirmation' className='block text-sm font-bold leading-5 text-gray-700'>Confirm Password</label>
                                <div className='mt-1 relative rounded-md shadow-sm'>
                                    <input
                                        id='password_confirmation'
                                        name='password_confirmation'
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        required=''
                                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                                    />
                                    <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
                                        {showConfirmPassword ? (
                                            <LuEyeOff
                                                className='h-5 w-5 text-gray-400 cursor-pointer'
                                                onClick={toggleConfirmPasswordVisibility}
                                            />
                                        ) : (
                                            <LuEye
                                                className='h-5 w-5 text-gray-400 cursor-pointer'
                                                onClick={toggleConfirmPasswordVisibility}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6">
                            <span class="block w-full rounded-md shadow-sm">
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    Create account
                    </button>
                </span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}