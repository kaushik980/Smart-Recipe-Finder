import React from "react";
import { FaHeart, FaPlus, FaStar } from "react-icons/fa"; // Icons
import imgChiken from "../assets/Chicken_65.jpg";

const Card = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-lg rounded-3xl overflow-hidden w-80 transform transition duration-300 hover:scale-105">
        {/* Image Section */}
        <div className="relative">
          <img className="w-full h-48 object-cover rounded-t-3xl" src={imgChiken} alt="Chicken 65" />
          <button className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
            <FaHeart />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h1 className="text-2xl font-semibold text-gray-800">Chicken 65</h1>

          {/* Rating Section */}
          <div className="flex items-center space-x-1 text-yellow-400 my-2">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300" />
            <span className="text-gray-600 text-sm">(4.5/5)</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4">
            A crispy, spicy, and delicious South Indian chicken dish.
          </p>

          {/* Button Section */}
          <div className="flex justify-between">
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-emerald-600">
              <span>View Details</span>
            </button>

            <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600">
              <FaPlus />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
