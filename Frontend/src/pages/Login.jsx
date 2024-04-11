import { RiUserAddLine } from "react-icons/ri"
import { useState } from "react"
import { PiEyeClosedBold } from "react-icons/pi"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
function Login (){
    const [showPassword, setShowPassword] = useState (true)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return(
        <div className="py-16 justify-center bg-slate-200 h-screen">
            <div className="flex bg-white rounded-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl relative shadow-xl shadow-sky-600">
                <Link to="/">
                    <div className="absolute top-0 right-0 m-4 cursor-pointer">
                        <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                </Link>
                <div className="hidded lg:block lg:w-1/2 bg-cover bg-[url('/assets/login.svg')]"></div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">BalaiFinder</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome Back!</p>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input type="email" className="bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        </div>
                        <input type={showPassword ? 'text' : 'password'} className=" bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                        <div className="mt-3">
                            <label className="inline-flex items-center" htmlFor="showPassCheck">
                                <input  type="checkbox" id="showPassCheck" 
                                checked={showPassword}
                                onChange={togglePasswordVisibility}
                                className="size-4 accent-sky-500 "/>
                                <span className="text-gray-700 text-sm font-bold ml-2">Show password</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="bg-sky-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-sky-500">Login</button>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                        <span className="border-b border-gray-500 w-1/5 md:w-1/4"></span>
                        <Link to="/register">
                            <p className="text-xs text-gray-500 uppercase" >Or Create Account</p>
                        </Link>
                        <span className="border-b border-gray-500 w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login