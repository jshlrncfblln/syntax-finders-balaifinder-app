import React, { useState, useEffect,useContext } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { BiMessageDetail } from 'react-icons/bi';
import Contact from './components/Contact';
import ResultSection from './components/ResultSection';
import Layout from './components/RealtorLayout';
import { AuthContext } from './context/authContext';
import About from './pages/About';
import Home from './pages/Home';
import LikeProperties from './pages/LikeProperties';
import MatchUp from './pages/MatchUp';
import Profile from './pages/ProfileSettings';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Register from './pages/Register';
import Dashboard from './realtor/Dashboard';
import Inbox from './realtor/Inbox';
import Manage from './realtor/Manage-Property';
import Settings from './realtor/Settings';
import RealtorLogin from './realtor/RealtorLogin';
import RealtorRegister from './realtor/RealtorRegister';

function App() {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate a delay to demonstrate the loading animation
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const [isOpenContactModal, setIsOpenContactModal] = useState(false);

  const toggleContactModal = () => {
    setIsOpenContactModal(!isOpenContactModal);
  };

  // Check if the current route is under the Realtor section
  const isRealtorRoute = location.pathname.startsWith('/realtor');

  return (
    <main>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <img src="assets/balaifinder.png" alt="Loading" className="w-16 h-16 mr-2 animate-spin" />
          <h1 className="text-3xl font-semibold text-gray-800">Loading...</h1>
        </div>
      ) : (
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/matching" element={<MatchUp />} />
            <Route path="/register" element={<Register />} />
            <Route path="/realtor/*" element={<RealtorRoutes />} />
            <Route path="/" element={<ResultSection />} />
            <Route path="/list-of-liked-properties" element={<LikeProperties />} />
            <Route path="/details/:id" element={<PropertyDetails />} />
            <Route path="/user-profile-settings" element={<Profile />} />
          </Routes>
          {!isRealtorRoute && (
            <div className="fixed bottom-4 right-4">
              <button
                onClick={toggleContactModal}
                className="flex items-center bg-sky-500 hover:bg-sky-700 text-white rounded-full py-4 px-5 shadow-lg"
              >
                <BiMessageDetail className="text-xl mr-2" />
                Contact
              </button>
            </div>
          )}
          <Contact isOpen={isOpenContactModal} onClose={() => setIsOpenContactModal(false)} />
        </div>
      )}
    </main>
  );
}

function RealtorRoutes() {
  return (
    <Routes>
        <Route path="/" element={<RealtorLogin />} />
        <Route path="/registration" element={<RealtorRegister />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/manage-property" element={<Layout><Manage /></Layout>} />
        <Route path="/inbox" element={<Layout><Inbox /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
    </Routes>
  );
}

export default App;
