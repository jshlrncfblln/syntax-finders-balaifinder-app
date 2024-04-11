import Navbar from "../components/navbar"
import Footer from "../components/Footer"

export default function Profile() {
    return (
        <div className="bg-slate-100">
            <Navbar />
            <div className="container mx-auto py-8">
                <form className="bg-white p-2 rounded-xl">
                <h2 className="font-lato text-3xl text-center font-extrabold text-black m-4">User Account</h2>
                <p className="font-semibold text-center">General Information</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-4">
                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    First Name
                                </label>
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5"
                                    id="fname" type="text" placeholder="First Name*" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Last Name
                                </label>
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="lname" type="text" placeholder="Last Name*" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="email" type="email" placeholder="Email*" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Birthdate
                                </label>
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="phone" type="date" placeholder="Birthdate*" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Gender
                                </label>
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="job" type="text" placeholder="Gender" />
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Resedential Address
                                </label>
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="url" type="url" placeholder="Resedential Address" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Region
                                </label>
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="address" type="text" placeholder="Region" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Province
                                </label>
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="address" type="text" placeholder="Province" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Municipality
                                </label>
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="city" type="text" placeholder="Municipality" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Zip Code
                                </label>
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="pin" type="number" placeholder="Zip Code" />
                            </div>
                        </div>
                    </div>
                    <div className="m-4 flex justify-end gap-4">
                        <button className=" bg-sky-500 border border-primary text-white text-h4 py-3 px-8 rounded-lg py-2 lg:mt-8 mt-4 hover:bg-sky-700 hover:shadow-black hover:shadow-md">Edit Profile
                        </button>
                        <button className=" bg-black border border-primary text-white text-h4 py-3 px-8 rounded-lg py-2 lg:mt-8 mt-4 hover:shadow-black hover:shadow-md">Change Password
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
