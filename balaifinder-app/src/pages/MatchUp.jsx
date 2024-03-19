import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {toast} from "react-toastify"
import axios from "axios"
import Introduction from '../components/MatchIntroduction'
import Settings from '../components/PreferenceSettings'
import MatchResults from '../components/ResultPage'
function MatchUp() {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({});
  const [results, setResults] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  
  const handlePreferencesSubmit = (data) => {
    setPreferences(data);
    // Perform matching logic based on preferences and update results
    setResults(/* Match results based on preferences */);
    setStep(3); // Move to match results step
    setShowSettings(false); // Close the settings modal
  };
  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  return (
    <div>
        {step === 1 && <Introduction onNext={handleOpenSettings} />}
        {step === 2 && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
            <Settings onClose={handleCloseSettings} onSubmit={handlePreferencesSubmit} />
          </div>
        )}
        {step === 3 && <MatchResults results={results} />}
    </div>
  );
}

export default MatchUp;