import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import '../index.css'
import { useState } from 'react'
export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }
    return(
        <div className="flex bg-white shadow items-center justify-between gap-8 p-3 w-full">
            <div className='flex items-center'>
                <img src="./src/assets/BalaiFinder-Logo-30x30.png" alt="" height={50} width={50} />
                <Link to="/" className="font-bold text-3xl">BalaiFinder</Link>
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
                <div className={`fixed top-0 left-0 w-full h-full  bg-white z-50 ${isOpen ? 'block' : 'hidden'}`}>
                    <button onClick={toggleMenu} className="absolute top-3 right-3 text-gray-800 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="flex flex-col items-center justify-center text-2xl h-full gap-10">
                        <li><CustomLink to="/" className="p-2 underline-hover relative font-semibold">Home</CustomLink></li>
                        <li><CustomLink to="/about" className="underline-hover relative p-2 font-semibold">About Us</CustomLink></li>
                        <li><CustomLink to="/properties" className="underline-hover relative p-2 font-semibold">Properties</CustomLink></li>
                        <li><CustomLink to="/Matching" className="underline-hover relative p-2 font-semibold">Match Up</CustomLink></li>
                        <li><CustomLink to="/login" className="underline-hover relative p-2 font-semibold">Login</CustomLink></li>
                    </ul>
                </div>
            </div>
            <ul className="hidden md:flex gap-4 p-2 items-center">
                <li><CustomLink to="/" className="p-2 underline-hover relative font-semibold">Home</CustomLink></li>
                <li><CustomLink to="/about" className="underline-hover relative p-2 font-semibold">About Us</CustomLink></li>
                <li><CustomLink to="/properties" className="underline-hover relative p-2 font-semibold">Properties</CustomLink></li>
                <li><CustomLink to="/Matching" className="underline-hover relative p-2 font-semibold">Match Up</CustomLink></li>
                <li><CustomLink to='/login'><button className="outline outline-sky-600 hover:bg-sky-800 hover:outline-sky-300 hover:text-white p-2 w-24 rounded-lg font-semibold">Login</button></CustomLink></li>
            </ul>
        </div>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}