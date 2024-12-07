import React from "react";
import { copyCaption } from "../utils/copyText";

interface LinkedInUIProps {
  content: string | undefined;
  suggestions: string[] | undefined;
}

const LinkedInUI: React.FC<LinkedInUIProps> = ({ content }) => {
  return (
    <div className="flex flex-col max-w-2xl sm:w-96 p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full">
        <div className="flex space-x-4">
          <img
            alt="User"
            src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              Leroy Jenkins
            </a>
            <span className="text-xs dark:text-gray-600">4 hours ago</span>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div>
        <h3 className="text-sm font-semibold mb-2 dark:text-gray-800"></h3>
        <ul className="pl-5 space-y-2 text-sm dark:text-gray-600">
          {content ? (
            content.split("\n").map((line, index) => <li key={index}>{line}</li>)
          ) : (
            <li>Writing your caption....</li>
          )}
        </ul>
      </div>

      {/* Post Image */}
      <div>
        <img
          src="images/linkedin.jpg"
          alt="Post Image"
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
      </div>

      {/* Action Buttons and Copy/Share */}
      <div className="flex flex-wrap justify-between items-center mt-3">
        {/* Action Buttons (Comment, Like, etc.) */}
        <div className="flex space-x-2 text-sm dark:text-gray-600">
          <button type="button" className="flex items-center p-1 space-x-1.5">
            {/* Comment Icon */}
            <span>30</span>
          </button>
          <button type="button" className="flex items-center p-1 space-x-1.5">
            {/* Like Icon */}
            <span>283</span>
          </button>
        </div>

        {/* Copy and Share Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => copyCaption(content!)}
            className="px-4 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Copy
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default LinkedInUI;
