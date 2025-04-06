import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate
} from 'react-router-dom';

import img from "./assets/images.png";
import RecipeList from './Components/RecipeList';
import Home from './Pages/Home';
import { FaMicrophone } from "react-icons/fa";
import AiSuggestions from './Pages/AiSuggestion';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

// ====================== NAVBAR =========================
const Navbar = ({ inputText, setInputText, setSearchQuery, onVoiceSearch }) => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setSearchQuery(inputText);
    navigate('/recipes'); // Navigate after setting the search query
  };

  return (
    <nav className="bg-gray-100 shadow-md p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="w-16 h-16">
          <img className="rounded-full" src={img} alt="logo" />
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-xl bg-white border border-gray-300 rounded-full shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-emerald-400">
          <input
            className="flex-grow px-5 py-2 text-gray-700 focus:outline-none rounded-l-full"
            type="text"
            placeholder="Search for recipes..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            onClick={onVoiceSearch}
            className="px-4 text-gray-500 hover:text-emerald-600 transition"
            title="Voice Search"
          >
            <FaMicrophone size={18} />
          </button>
          <button
            onClick={handleSearchClick}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-2 rounded-r-full transition"
          >
            Search
          </button>
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li><Link className="hover:text-gray-600" to="/">Home</Link></li>
          <li><Link className="hover:text-gray-600" to="/recipes">Recipes</Link></li>
          <li><Link className="hover:text-gray-600" to="/ai-suggestions">AI Suggestions</Link></li>
          <li><Link className="hover:text-gray-600" to="/about">About</Link></li>
          <li><Link className="hover:text-gray-600" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};
<Footer/>
// ==================== OTHER ROUTE COMPONENTS ====================
const Recipes = ({ searchQuery }) => (
  <>
    <h1 className="text-center text-2xl mt-10">Find Delicious Recipes</h1>
    <RecipeList searchQuery={searchQuery} />
  </>
);
 

// ===================== APP COMPONENT ============================
const App = () => {
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [listening, setListening] = useState(false);

  const handleVoiceSearch = () => {
    setShowPopup(true);
    setListening(true);
  
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
  
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
  
      // Wait for state to update before searching
      setTimeout(() => {
        setShowPopup(false);
        setListening(false);
        setSearchQuery(transcript);
        
        // Navigate to /recipes automatically
        navigate('/recipes');  
      }, 500);
    };
  
    recognition.onerror = () => {
      setShowPopup(false);
      setListening(false);
      alert("Sorry, couldn't recognize your voice.");
    };
  };
  

  return (
    <Router>
      <Navbar
        inputText={inputText}
        setInputText={setInputText}
        setSearchQuery={setSearchQuery}
        onVoiceSearch={handleVoiceSearch}
      />

      {/* Voice Search Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Listening...</h2>
            <FaMicrophone className={`text-red-500 ${listening ? "animate-pulse" : ""}`} size={40} />
            <p className="text-gray-500 mt-2">Speak now...</p>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/recipes" element={<Recipes searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} /> */}
        <Route path="/recipes" element={<RecipeList searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />


        <Route path="/ai-suggestions" element={<AiSuggestions/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App;
