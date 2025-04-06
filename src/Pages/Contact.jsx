import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank You! Your Message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center px-4"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80)`,
      }}
    >
      <div className="bg-white/90 p-8 rounded-xl shadow-lg max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-emerald-600">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="flex gap-6 mt-8 text-white text-2xl">
        <a
          href="https://www.linkedin.com/in/kaushik-kumar-katikia-9733411b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-emerald-400" />
        </a>
        <a
          href="https://github.com/kaushik980"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-emerald-400" />
        </a>
        <a
          href="https://instagram.com/ama.nimapada"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-emerald-400" />
        </a>
        <a
          href="https://www.youtube.com/@YourChannelName"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="hover:text-emerald-400" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
