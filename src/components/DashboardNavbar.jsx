import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // You can add logic here to toggle your theme classes or apply a CSS class to the body element
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`bg-${isDarkMode ? 'gray-900' : 'slate-100'} p-4`}>
            <div className="flex justify-between items-center">
                <div className={`text-${isDarkMode ? 'white' : 'black'} font-bold`}>Balai<span className='text-sky-400'>Finder</span></div>
                <div className="flex items-center">
                    <div className={`ml-4 mr-2 text-${isDarkMode ? 'white' : 'black'}`} onClick={toggleMenu}>Welcome, User</div>
                    <img
                        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg"
                        alt="Profile"
                        className="h-8 w-8 rounded-full cursor-pointer relative"
                        onClick={toggleMenu}
                    />
                    {isMenuOpen && (
                        <div className="absolute ml-4 mt-2 w-40 bg-white rounded shadow-lg">
                            <ul>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Profile</li>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
                <button
                    onClick={toggleTheme}
                    className={`flex items-center ml-4 bg-${isDarkMode ? 'yellow-300' : 'gray-100'} text-${isDarkMode ? 'white' : 'black'} px-3 py-2 rounded-full`}
                >
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
