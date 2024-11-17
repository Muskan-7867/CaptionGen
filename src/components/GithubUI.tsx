import React from "react";

interface GithubProps {
  content: string | undefined;
  suggestions?: string[];
}

const GithubUI: React.FC<GithubProps> = ({ content, suggestions }) => {
  const copyContent = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      alert("Content copied to clipboard!");
    }
  };

  return (
    <div className="max-w-2xl p-4 sm:w-96 border rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      {/* Header Section */}
      <div className="flex items-center justify-between pb-3 border-b">
        <h2 className="text-lg font-semibold dark:text-gray-900">Repository Name</h2>
        <button className="px-2 py-1 text-sm text-gray-700 bg-gray-200 rounded dark:bg-gray-800 dark:text-gray-100">
          Star
        </button>
      </div>

      {/* Content Section */}
      <div className="space-y-4 mt-4">
        {/* Metadata */}
        <div className="text-xs text-gray-500">
          <span>Updated 6 minutes ago</span> · <span>Category: Photography</span>
        </div>

        {/* Image */}
        <img
          src="src/images/github.webp"
          alt="Post"
          className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />

        {/* Captions */}
        <div>
          <h3 className="text-sm font-semibold mb-2 dark:text-gray-900">Captions:</h3>
          <ul className="pl-5 space-y-2 text-sm dark:text-gray-600">
            {content ? (
              content.split("\n").map((line, index) => (
                <li key={index}>{line}</li>
              ))
            ) : (
              <li>Write a post...</li>
            )}
          </ul>
        </div>

        {/* Copy Button (Right-Aligned) */}
        {content && (
          <div className="flex justify-end">
            <button
              onClick={copyContent}
              className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Copy
            </button>
          </div>
        )}

        {/* Suggestions */}
        {suggestions && suggestions.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold mb-2 dark:text-gray-900">
              Suggestions:
            </h3>
            <ul className="pl-5 list-disc space-y-1 text-sm dark:text-gray-600">
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-700">
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <span>💬</span>
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-green-500">
          <span>👍</span>
          <span>React</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-gray-700">
          <span>📤</span>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default GithubUI;
