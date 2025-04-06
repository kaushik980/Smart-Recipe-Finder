import React from "react";

const About = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80)",
      }}
    >
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-3xl text-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-center text-emerald-300">
          About This Website
        </h1>

        <p className="mb-4">
          This website is an <span className="text-emerald-400 font-semibold">AI-powered platform</span> where users can ask any question and get instant suggestions using the latest AI technology. It is built with a clean design and smooth user experience in mind.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
          Key Features:
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>AI Suggestion using Gemini API</li>
          <li>Voice Input Support</li>
          <li>Clean & Responsive UI</li>
          <li>Modern Tech Stack</li>
        </ul>

        <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
          Technologies Used:
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>React JS</li>
          <li>Tailwind CSS</li>
          <li>Gemini API</li>
          <li>Axios (for API Call)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
          Purpose:
        </h2>
        <p className="mb-4">
          The main purpose of this project is to integrate AI technology with a user-friendly interface to provide quick and smart suggestions to users for their queries.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
          Future Scope:
        </h2>
        <p>
          In the future, more AI features like <span className="text-emerald-300">Image Generation</span>, <span className="text-emerald-300">Chatbot</span>, and <span className="text-emerald-300">Personal AI Assistant</span> will be integrated for better user engagement.
        </p>
      </div>
    </div>
  );
};

export default About;
