import { useState } from 'react';
import { RiDashboardLine, RiSettingsLine, RiInboxLine, RiHomeGearLine, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '/assets/Balaifinder.png';
import { MdMenu } from "react-icons/md";

export default function DashboardSidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={`bg-white transition-all duration-300 ease-in-out h-screen lg:flex lg:flex-row lg:h-screen lg:w-72 border-e ${sidebarOpen ? 'lg:w-20' : ''}`}>
            {/* Hamburger Menu */}
            <div className="lg:hidden flex justify-end pr-4 pt-4">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="text-gray-500 focus:outline-none focus:text-gray-800 flex items-center justify-center shadow border px-2 py-2 ml-3" 
                    style={{ minWidth: '2rem' }} // Ensure button doesn't collapse when empty
                >
                    {sidebarOpen ? (
                        <RiCloseLine className="h-6 w-6" />
                    ) : (
                        <MdMenu size={32} /> 
                    )}
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`lg:flex lg:flex-col h-screen ${sidebarOpen ? 'block' : 'hidden'}`}
            >
                <div className="lg:flex lg:items-center lg:justify-center w-full pt-2">
                    <span className="flex items-center px-8 py-3 place-content-center rounded-lg text-3xl font-bold">
                        <img src={logo} width="64" className="mr-1" alt="logo" />
                        Balai<span className="text-sky-500">Finder</span>
                    </span>
                </div>
                <div className="px-4 py-2">
                    <ul className="mt-6 space-y-1">
                        <li>
                            <Link
                                to="/realtor/dashboard"
                                className="block flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-sky-500 hover:text-white"
                            >
                                <span className="flex items-center">
                                    <RiDashboardLine className="mr-2" />
                                    Dashboard
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/realtor/manage-property"
                                className="block flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-sky-500 hover:text-white"
                            >
                                <span className="flex items-center">
                                    <RiHomeGearLine className="mr-2" />
                                    Manage Property
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/realtor/inbox"
                                className="block flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-sky-500 hover:text-white"
                            >
                                <span className="flex items-center">
                                    <RiInboxLine className="mr-2" />
                                    Inbox
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/realtor/settings"
                                className="block flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-sky-500 hover:text-white"
                            >
                                <span className="flex items-center">
                                    <RiSettingsLine className="mr-2" />
                                    Settings
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
