import axios from "axios";

const API_KEY = "AIzaSyBITKXMQ6o9GU3TGt-Zm_1NG1zs5Y59MkE";  // Your Gemini API Key

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export const fetchGeminiResponse = async (userInput) => {
  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: userInput }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result =
      response?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from AI";

    return result;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry! AI is busy or API limit reached 😢";
  }
};
