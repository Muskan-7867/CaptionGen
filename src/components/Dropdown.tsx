import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

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
      {/* Button with label and value, hiding value on small screens */}
      <button
        onClick={toggleDropdown}
        className="flex items-center px-3 py-2 sm:px-4 sm:py-3 bg-gray-200 rounded hover:bg-gray-300 w-full sm:w-auto text-left"
      >
       
        {/* Only show value on medium screens and larger */}
        <span className="hidden sm:inline ml-2">{value}</span>
        <AiOutlineDown className="ml-2 text-gray-600" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full sm:w-48 bg-white rounded shadow-lg z-10">
          <ul className="text-gray-700">
            {items.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onChange(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
