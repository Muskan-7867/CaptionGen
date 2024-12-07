import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-wrap justify-between max-w-full items-center p-4 bg-blue-600 shadow-md">
      {/* Logo with Animation */}
      <div className="text-white text-xl sm:text-2xl font-bold animate-bounce">
        CaptionGen
      </div>

      {/* Button */}
      <div className="mt-2 sm:mt-0 sm:flex sm:justify-end">
        <button className="px-3 py-2 sm:px-4 sm:py-2 text-blue-600 bg-white rounded hover:bg-gray-100">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
