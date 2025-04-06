// Pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/bg.webp'; // Add a nice background image

const Home = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Smart Recipe Finder</h1>
        <p className="text-xl mt-4">Discover AI-powered delicious recipes for every craving</p>
        <Link
          to="/recipes"
          className="mt-6 bg-emerald-600 text-white py-3 px-6 rounded-full text-lg hover:bg-emerald-700 transition"
        >
          Find Recipes
        </Link>
      </div>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "AI Suggestions", desc: "Get smart recipe ideas based on ingredients" },
            { title: "Healthy Choices", desc: "Balanced and nutritious meal options" },
            { title: "Fast & Easy", desc: "Quick recipes with simple steps" },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
