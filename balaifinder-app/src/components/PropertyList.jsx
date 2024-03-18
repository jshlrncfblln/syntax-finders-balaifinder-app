import React, {useState, useEffect} from "react"
import axios from "axios"


export default function PropLists(){

    const [data, setData] = useState([])

    const loadData = async () => {
        const response = await axios.get("http://localhost:8800/api/get/properties")
        setData(response.data)
    }

    useEffect(() => {
        loadData();
    }, [])

    return(
        <section className="w-fit mx-auto grid grid-cols lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-10">
                {data.map((item) => (
                    <div key={item._id} class="w-72 bg-white shadow-md rounded-xl hover:shadow-sky-600 duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="/property-details">
                        <img src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <div class="px-4 py-3 w-72">
                        <span class="text-gray-400 mr-3 uppercase text-xs">{item.type}</span>
                        <p class="text-lg font-bold text-black truncate block capitalize">{item.name}</p>
                        <p class="text-lg font-bold text-black truncate block capitalize">{item.location}</p>
                        <div class="flex items-center">
                            <p class="text-lg font-semibold text-black cursor-auto my-3">₱{new Intl.NumberFormat().format(item.price)}</p>
                            <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                            </svg></div>
                        </div>
                        </div>
                    </a>
                    </div>
                ))}
        </section>
    )
}