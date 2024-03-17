import logo from '../assets/Balaifinder.png'
import { RiDashboardLine, RiSettingsLine, RiInboxLine, RiHomeGearLine } from 'react-icons/ri'

export default function DashboardSidebar(){
    return (
        <div class="flex h-screen w-72 flex-col justify-between border-e bg-white">
            <div class="">
                <div class="flex items-center justify-center w-full pt-2">
                    <span class="flex items-center px-8 py-3 place-content-center rounded-lg text-3xl text-gray-600 font-bold">
                        <img src={logo} width="64" class="mr-1" />
                        Balai<span className="text-sky-500">Finder</span>
                    </span>
                </div>
                <div class="px-4 py-2">
                    <ul class="mt-6 space-y-1">
                        {/** THIS IS FOR THE DASHBOARD */}
                        <li>
                            <a
                                href="#"
                                class="block flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-sky-500 hover:text-white"
                            >
                                <span class="flex items-center">
                                    <RiDashboardLine className="mr-2" />
                                    Dashboard
                                </span>
                            </a>
                        </li>
                        {/** THIS IS FOR THE MANAGE PROPERTY */}
                        <li>
                            <details class="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    class="flex cursor-pointer items-center text-sm justify-between font-semibold rounded-lg px-4 py-2 text-gray-500 hover:bg-sky-500 hover:text-white"
                                >
                                    <span class="flex items-center">
                                        <RiHomeGearLine className="mr-2" />
                                        Manage Property
                                    </span>
                                    <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <ul class="mt-2 space-y-1 px-4">
                                    <li>
                                        <a
                                            href="#"
                                            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-sky-500 hover:text-white"
                                        >
                                            Add Properties
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-sky-500 hover:text-white"
                                        >
                                            Update Properties
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-sky-500 hover:text-white"
                                        >
                                            Delete Properties
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>

                        {/*THIS FOR THE INBOX*/}
                        <li>
                            <a
                                href="#"
                                class="block flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-sky-500 hover:text-white"
                            >
                                <span class="flex items-center">
                                    <RiInboxLine className="mr-2" />
                                    Inbox
                                </span>
                            </a>
                        </li>

                        {/*THIS IS FOR THE SETTINGS*/}
                        <li>
                            <details class="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    class="flex cursor-pointer items-center text-sm justify-between font-semibold rounded-lg px-4 py-2 text-gray-500 hover:bg-sky-500 hover:text-white"
                                >
                                    <span class="flex items-center">
                                        <RiSettingsLine className="mr-2" />
                                        Settings
                                    </span>
                                    <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <ul class="mt-2 space-y-1 px-4">
                                    <li>
                                        <a
                                            href="#"
                                            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-sky-500 hover:text-white"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-sky-500 hover:text-white"
                                        >
                                            Display
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-sky-500 hover:text-white"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

            </div>

            <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        class="size-10 rounded-full object-cover"
                    />

                    <div>
                        <p class="text-xs">
                            <strong class="block font-medium">Eric Frusciante</strong>
                            <span> eric@frusciante.com </span>
                        </p>
                    </div>
                </a>
            </div>
        </div>


    )
}