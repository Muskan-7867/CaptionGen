import React from "react";

interface TwitterUIProps {
  imageSrc?: string;
  content: string | undefined;
  username: string;
  handle: string;
}

const TwitterUI: React.FC<TwitterUIProps> = ({
  imageSrc,
  content,
  username,
  handle,
}) => {
  const copyContent = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      alert("Content copied to clipboard!");
    }
  };

  return (
    <div className="max-w-2xl p-4 border rounded-md shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-900 border-gray-300">
      {/* Header Section */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-900 dark:text-gray-800">
                {username}
              </span>
              <span className="text-sm text-gray-500">@{handle}</span>
            </div>
          </div>
        </div>

        {/* Copy Button (Aligned to Right) */}
        {content && (
          <button
            onClick={copyContent}
            className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Copy
          </button>
        )}
      </div>

      {/* Content Section */}
      <div className="mt-3">
        <ul className="pl-5 space-y-2 text-sm dark:text-gray-600">
          {content ? (
            content.split("\n").map((line, index) => (
              <li key={index}>{line}</li>
            ))
          ) : (
            <li>Write something...</li>
          )}
        </ul>
      </div>

      {/* Image Section (optional) */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Tweet Image"
          className="mt-3 rounded-md object-cover object-center w-full dark:bg-gray-500"
        />
      )}

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-3 text-gray-500 dark:text-gray-700">
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <span>💬</span>
          <span className="text-sm">Reply</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-green-500">
          <span>🔁</span>
          <span className="text-sm">Retweet</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-red-500">
          <span>❤️</span>
          <span className="text-sm">Like</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-gray-700">
          <span>📤</span>
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  );
};

export default TwitterUI;
