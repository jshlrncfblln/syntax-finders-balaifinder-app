import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Properties from './pages/Properties'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './realtor/Dashboard'
import Manage from './realtor/Manage-Property'
import Inbox from './realtor/Inbox'
import Settings from './realtor/Settings'
import { BiMessageDetail } from "react-icons/bi"
import { useState } from 'react'
import Contact from './components/Contact'

function App() {
  const [isOpenContactModal, setIsOpenContactModal] = useState(false)
  const toggleContactModal = () => {
    setIsOpenContactModal(!isOpenContactModal)
  }
  return (
    <div className='App'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/realtor/*" element={<RealtorRoutes />} />
        </Routes>
        <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleContactModal}
          className="flex items-center bg-sky-500 hover:bg-sky-700 text-white rounded-full py-4 px-5 shadow-lg"
        >
          <BiMessageDetail className="text-xl mr-2" />
          Contact
        </button>
      </div>
      <Contact isOpen={isOpenContactModal} onClose={() => setIsOpenContactModal(false)} />    </div>
  )
}

function RealtorRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/manage-property" element={<Manage />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/settings" element={<Settings />} />
  </Routes>
  )
}

export default App
