import Navbar from '../components/navbar'
import PropLists from '../components/PropertyList'
import Footer from '../components/Footer'

function Properties(){
    return(
        <div class="">
            <Navbar/>
            <div class="">
                <div class="mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                        <h1
                            class="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-10">
                            Looking for
                            <span class="text-sky-500"> Ideal Home </span>
                            for your family?
                        </h1>
                        <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center text-xl">
                            A Matching Site for Home Buyers trouble in finding their ideal home.
                        </p>
                    </div>
                    <div class="flex w-11/12 md:w-8/12 xl:w-6/12">
                        <div class="flex rounded-md w-full">
                            <input type="text"
                                class="w-full p-3 rounded-md rounded-r-none border border-2 border-sky-300 placeholder-gray-400 focus:outline-sky-700 "
                                placeholder="Search for Location, Price, or Type of Property ..."  />
                            <button
                                class="inline-flex items-center gap-2 bg-sky-500 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
                                <span>Find</span>
                                <svg class="text-gray-200 h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                    viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }}

                                    xml:space="preserve">
                                    <path
                                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <PropLists className="mb-4" />
            <Footer />
        </div>
    )
}
export default Properties