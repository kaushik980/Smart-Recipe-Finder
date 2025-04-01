import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import img from "./assets/images.png";
import Card from './Components/Card';
import Home from './Components/Home';
 

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="w-16 h-16">
          <img className="rounded-full" src={img} alt="logo" />
        </div>

        {/* Search Bar */}
        <div>
          <input
            className="border border-gray-300 h-10 w-96 px-4 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            type="text"
            placeholder="Search..."
          />
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

 
const Recipes = () => <h1 className="text-center text-2xl mt-10">Find Delicious Recipes</h1>;
const AISuggestions = () => <h1 className="text-center text-2xl mt-10">AI-Powered Suggestions</h1>;
const About = () => <h1 className="text-center text-2xl mt-10">About Our Project</h1>;
const Contact = () => <h1 className="text-center text-2xl mt-10">Contact Us</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/ai-suggestions" element={<AISuggestions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
