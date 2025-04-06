import React from "react";

const Footer = () => {
  return (
    <footer className="bg-emerald-600 text-white py-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-center text-sm">
          © 2025 Recipe Finder. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-emerald-300 duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-emerald-300 duration-200">
            Terms
          </a>
          <a href="#" className="hover:text-emerald-300 duration-200">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
