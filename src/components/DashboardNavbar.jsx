import { Popover } from '@headlessui/react'

export default function DashboardNavbar(){
    return(
        <nav className=''>
            <div class="mx-auto max-w-screen-xl px-6 lg:px-8 relative">
                <div class="relative flex h-16 space-x-10 w-full">
                <div class="flex justify-start"><a class="flex flex-shrink-0 items-center" href="/">
                    <img class="block h-8 w-auto" src="./src/assets/BalaiFinder.png" />
                    </a>
                </div>
                <div class="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end "><a
                    class="text-gray-700 hover:text-lime-700 text-sm font-medium" href="/login">Login</a>
                    <a class="text-white bg-gray-800 hover:bg-gray-900 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                    href="/signup">Sign up</a>
                </div>
                </div>
            </div>
        </nav>
    )
}