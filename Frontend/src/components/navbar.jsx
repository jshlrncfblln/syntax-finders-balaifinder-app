import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import { useState, useContext,useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginModal from "./LoginModal"; // Import the LoginModal component
import { Transition } from '@headlessui/react';
import { FaUser } from "react-icons/fa";
import { BsHouseCheckFill } from "react-icons/bs"



function Navbar() {
  const { currentUser, login, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const navigate = useNavigate();
    // State to track whether the menu is open or closed
  const [isOpenPopMenu, setIsOpenPopMenu] = useState(false);

    // Function to toggle the menu open and closed
  const togglePopMenu = () => {
    setIsOpenPopMenu(!isOpenPopMenu);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleClick() {
      if (scrollPosition > 0) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [scrollPosition]);

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

  const handleLogout = async () => {
    try {
      // Call the logout function from the context
      await logout();

      // Redirect the user to the home page
      navigate("/");
      toast.success('Logout successful!');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const handleClick = (e) => {
    if (e.target.classList.contains('modal-button')) {
      e.preventDefault();
      setIsOpenLoginModal(!isOpenLoginModal);
    }
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="flex bg-white shadow items-center justify-between gap-8 p-3 w-full">
        <div className="flex items-center">
          <img src="/assets/Balaifinder.png" alt="" height={50} width={50} />
          <Link to="/" className="font-bold text-3xl">
            Balai<span className="text-sky-500">Finder</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div
            className={`fixed top-0 right-0 w-3/5 h-full bg-gray-700 z-50 transition-all duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-3 right-3 text-white outline outline-1 px-1 py-1 rounded focus:outline-sky-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col items-center justify-center text-2xl h-full gap-10 text-white">
              <li>
                <CustomLink
                  to="/"
                  className="p-2 underline-hover relative font-semibold"
                >
                  Home
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/about"
                  className="underline-hover relative p-2 font-semibold"
                >
                  About Us
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/properties"
                  className="underline-hover relative p-2 font-semibold"
                >
                  Properties
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/matching"
                  className="underline-hover relative p-2 font-semibold"
                >
                  Match Up
                </CustomLink>
              </li>
              {currentUser ? (
                <li>
                  <button
                    onClick={togglePopMenu}
                    className="rounded-md px-2 py-2 hover:shadow-md">
                      <FaUser />
                  </button>
                  <Transition
                      show={isOpenPopMenu}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {/* Menu items */}
                        <Link to="/user-profile-settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Profile Settings
                        </Link>
                        <a
                          onClick={handleLogout}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          role="menuitem"
                        >
                          Logout
                        </a>
                      </div>
                    </div>
                  </Transition>
                </li>
              ) : (
                <li>
                  <button
                    onClick={toggleLoginModal}
                    className="rounded-lg bg-sky-500 px-8 py-1.5 hover:bg-sky-700 text-white"
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
        <ul className="hidden md:flex gap-4 p-2 items-center">
          <li>
            <CustomLink
              to="/"
              className="p-2 underline-hover relative font-semibold"
            >
              Home
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/about"
              className="underline-hover relative p-2 font-semibold"
            >
              About Us
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/properties"
              className="underline-hover relative p-2 font-semibold"
            >
              Properties
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/matching"
              className="underline-hover relative p-2 font-semibold"
            >
              Match Up
            </CustomLink>
          </li>
          {currentUser ? (
                <li>
                  <Link to="/list-of-liked-properties">
                    <button className="rounded-md px-2 py-2 hover:shadow-md"><BsHouseCheckFill /></button>
                  </Link>
                  <button
                    onClick={togglePopMenu}
                    className="rounded-md px-2 py-2 hover:shadow-md">
                      <FaUser />
                  </button>
                  <Transition
                      show={isOpenPopMenu}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {/* Menu items */}
                        <Link to="/user-profile-settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Profile
                        </Link>
                        <a
                          onClick={handleLogout}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          role="menuitem"
                        >
                          Logout
                        </a>
                      </div>
                    </div>
                  </Transition>
                </li>
          ) : (
                <li>
                  <button
                    onClick={toggleLoginModal}  
                    className="rounded-lg text-white bg-sky-500 px-8 py-1.5 hover:bg-sky-700"
                  >
                    Login
                  </button>
                </li>
              )}
        </ul>
        <LoginModal
          isOpen={isOpenLoginModal}
          onClose={() => setIsOpenLoginModal(false)}
        />
      </div>
    </nav>
  );
}

export default Navbar;

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
        <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-500 origin-left transform scale-x-0 transition-transform transition duration-300 ease-in-out group-hover:scale-x-100 translate-y-2"></span>
      </Link>
    </li>
  );
}
