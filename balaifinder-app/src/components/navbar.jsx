import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useState } from 'react';

function LoginModal({ isOpen, onClose }) {
    const [showPassword, setShowPassword] = useState(true);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    if (!isOpen) {
        return null; // Return null if the modal is not open
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="flex bg-white rounded-lg overflow-hidden mx-auto max-w-md w-full p-8 relative shadow-xl shadow-sky-600" style={{ maxWidth: '600px' }}>
                <div onClick={onClose} className="absolute top-0 right-0 m-4 cursor-pointer">
                    <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
                <div className="hidden items-center justify-center text-center lg:flex lg:flex-col lg:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-700">Balai<span className='text-sky-500'>Finder</span></h2>
                    <img src="./src/assets/Balaifinder.png" className='object-center object-cover' alt="" />
                </div>
                <div className="w-full lg:w-1/2">
                    <p className="text-xl text-gray-600 text-center">Welcome Back!</p>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input type="email" className="bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        </div>
                        <input type={showPassword ? 'text' : 'password'} className="bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                        <div className="mt-3">
                            <label className="inline-flex items-center" htmlFor="showPassCheck">
                                <input type="checkbox" id="showPassCheck"
                                    checked={showPassword}
                                    onChange={togglePasswordVisibility}
                                    className="size-4 accent-sky-500 " />
                                <span className="text-gray-700 text-sm font-bold ml-2">Show password</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="bg-sky-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-sky-500">Create Account</button>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                        <span className="border-b border-gray-500 w-1/5 md:w-1/4"></span>
                        <p className="text-xs text-gray-500 uppercase" >Or Create Account</p>
                        <span className="border-b border-gray-500 w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleLoginModal = () => {
        setIsOpen(false); // Close the sidebar
        setIsOpenLoginModal(!isOpenLoginModal);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex bg-white shadow items-center justify-between gap-8 p-3 w-full">
            <div className='flex items-center'>
                <img src="./src/assets/BalaiFinder.png" alt="" height={50} width={50} />
                <Link to="/" className="font-bold text-3xl">Balai<span className='text-sky-500'>Finder</span></Link>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                <div className={`fixed top-0 right-0 w-3/5 h-full bg-gray-700 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button onClick={toggleMenu} className="absolute top-3 right-3 text-white outline outline-1 px-1 py-1 rounded focus:outline-sky-600">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="flex flex-col items-center justify-center text-2xl h-full gap-10 text-white">
                        <li><CustomLink to="/" className="p-2 underline-hover relative font-semibold">Home</CustomLink></li>
                        <li><CustomLink to="/about" className="underline-hover relative p-2 font-semibold">About Us</CustomLink></li>
                        <li><CustomLink to="/properties" className="underline-hover relative p-2 font-semibold">Properties</CustomLink></li>
                        <li><CustomLink to="/match" className="underline-hover relative p-2 font-semibold">Match Up</CustomLink></li>
                        <li><button onClick={toggleLoginModal} className="rounded-lg bg-sky-500 px-8 py-1.5">Login</button></li>
                    </ul>
                </div>
            </div>
            <ul className="hidden md:flex gap-4 p-2 items-center">
                <li><CustomLink to="/" className="p-2 underline-hover relative font-semibold">Home</CustomLink></li>
                <li><CustomLink to="/about" className="underline-hover relative p-2 font-semibold">About Us</CustomLink></li>
                <li><CustomLink to="/properties" className="underline-hover relative p-2 font-semibold">Properties</CustomLink></li>
                <li><CustomLink to="/match" className="underline-hover relative p-2 font-semibold">Match Up</CustomLink></li>
                <li><button onClick={toggleLoginModal} className="hover:bg-sky-700 bg-sky-500 px-6 py-1.5 rounded-lg text-white">Login</button></li>
            </ul>
            <LoginModal isOpen={isOpenLoginModal} onClose={() => setIsOpenLoginModal(false)} />
        </div>
    );
}


function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive === to ? "active" : ""}>
            <Link
                to={to}
                {...props}
                className="relative transition-colors duration-300 hover:text-sky-500 group font-semibold"
            >
                {children}
                <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-500 origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 translate-y-2"></span>
            </Link>
        </li>
    );
}
