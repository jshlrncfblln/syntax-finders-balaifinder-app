import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Properties from './pages/Properties'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
        </Routes>
    </div>
  )
}

export default App
