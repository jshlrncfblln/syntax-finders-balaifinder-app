import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Properties from './pages/Properties'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './realtor/Dashboard'
import ManageProperty from './realtor/Manage-Property'
import Inbox from './realtor/Inbox'
import Settings from './realtor/Settings'
function App() {
  return (
    <div className='App'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/realtor/*" element={<RealtorRoutes />} />
        </Routes>
    </div>
  )
}

function RealtorRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/manage-property" element={<ManageProperty />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/settings" element={<Settings />} />
  </Routes>
  )
}

export default App
