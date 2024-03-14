import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Properties from './pages/Properties'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './realtor/Dashboard'
import ManageProperty from './realtor/Manage-Property'
import Inbox from './realtor/Inbox'
import Settings from './realtor/Settings'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'


function App() {
  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className='App'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/register' element={<Register />} />
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
