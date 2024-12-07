import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { motion } from "framer-motion";

interface DropdownMenuProps {

  items: string[];
  value: string;
  onChange: (value: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({  items, value, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full sm:w-auto">
      {/* Button with  value */}
      <button
        onClick={toggleDropdown}
        className="flex items-center  text-center px-3 py-2 sm:px-4 sm:py-3 bg-gray-200 rounded-lg hover:bg-gray-300 w-full sm:w-auto "
      >
       
       
        <span className=" sm:inline ml-2">{value}</span>
        <AiOutlineDown className="ml-2 text-gray-600" />
      </button>

      {/* Dropdown menu */}
      
{isOpen && (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="absolute left-0 mt-2 w-full sm:w-48 bg-white rounded shadow-lg z-10"
  >
    <ul className="text-gray-700">
      {items.map((item, index) => (
        <li
          key={index}
          className="px-4 py-2  hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            onChange(item);
            setIsOpen(false);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
)}
    </div>
  );
};

export default DropdownMenu;
