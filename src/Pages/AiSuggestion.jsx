import React, { useState } from "react";
import { fetchGeminiResponse } from "../Api/Gemini";
import { FaMicrophone } from "react-icons/fa";

const AiSuggestion = () => {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVoiceInput = () => {
    const recognition =
      new window.webkitSpeechRecognition() || new window.SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = async (event) => {
      const speechResult = event.results[0][0].transcript;
      setUserInput(speechResult);
      await handleAskAI(speechResult);
    };

    recognition.onerror = (event) => {
      console.error("Voice recognition error:", event.error);
    };
  };

  const handleAskAI = async (inputText) => {
    const query = inputText || userInput;
    if (!query) return;

    setLoading(true);
    const response = await fetchGeminiResponse(query);
    setAiResponse(response);
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1350&q=80)",
      }}
    >
      <div className="max-w-3xl mx-auto bg-white bg-opacity-90 p-6 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-400">
          Recipe Finder AI
        </h1>

        <textarea
          className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-lg shadow-sm w-full"
          rows="4"
          placeholder="Search for a recipe or ask me anything..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        ></textarea>

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => handleAskAI()}
            className="bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition-all duration-200 w-full"
          >
            {loading ? "Finding..." : "Search Recipe"}
          </button>

          <button
            onClick={handleVoiceInput}
            className="bg-gray-100 border border-gray-300 p-3 rounded-xl shadow-sm hover:bg-gray-200 transition-all"
          >
            <FaMicrophone className="text-2xl text-emerald-500" />
          </button>
        </div>

        {aiResponse && (
          <div className="mt-6 p-4 bg-green-50 border border-emerald-200 rounded-xl text-gray-700">
            <h2 className="text-2xl font-semibold mb-2 text-emerald-500">
              AI Suggestion:
            </h2>
            <p>{aiResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiSuggestion;
