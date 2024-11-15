import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 shadow-md">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">
        CaptionGen
      </div>

      {/* Button */}
      <button className="px-4 py-2 text-blue-600 bg-white rounded hover:bg-gray-100">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
