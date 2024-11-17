import React from "react";

interface InstagramUIProps {
  content: string | undefined;
  suggestions: string[] | undefined;
}

const InstagramUI: React.FC<InstagramUIProps> = ({
  content,
  suggestions,
}) => {
  const copyCaption = (text: string) => {
    if (text) {
      navigator.clipboard.writeText(text);
      alert("Caption copied!");
    }
  };

  return (
    <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-800">
      {/* Header Section */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <img
            src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
            alt="User Profile"
            className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300"
          />
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-sm font-semibold"
          >
            Leroy Jenkins
          </a>
          <span className="text-xs dark:text-gray-600">4 hours ago</span>
        </div>
        <button title="Open options" type="button">
          {/* Options Icon */}
        </button>
      </div>

      {/* Post Image */}
      <img
        src="src/images/insta.jpg"
        alt="Post"
        className="object-cover object-center w-full h-72 dark:bg-gray-500"
      />

      {/* Post Content and Actions */}
      <div className="p-3 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              type="button"
              title="Like post"
              className="flex items-center justify-center"
            >
              ❤️
            </button>
            <button
              type="button"
              title="Add a comment"
              className="flex items-center justify-center"
            >
              💬
            </button>
            <button
              type="button"
              title="Share post"
              className="flex items-center justify-center"
            >
              🔄
            </button>
          </div>
          <button
            type="button"
            title="Bookmark post"
            className="flex items-center justify-center"
          >
            🔖
          </button>
        </div>

        {/* Post Likes */}
        <div className="flex flex-wrap items-center pt-3 pb-1">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-1">
              <img
                src="https://via.placeholder.com/24"
                alt="User1"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              <img
                src="https://via.placeholder.com/24"
                alt="User2"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
            <span className="text-sm">
              Liked by <span className="font-semibold">Mamba UI</span> and{" "}
              <span className="font-semibold">others</span>
            </span>
          </div>
        </div>

        {/* Post Content */}
        <div className="relative">
          <ul className="pl-5 space-y-2 text-sm dark:text-gray-600">
            {content ? (
              content
                .split("\n")
                .map((line, index) => <li key={index}>{line}</li>)
            ) : (
              <li>Writing your caption....</li>
            )}
          </ul>

          {/* Copy Button */}
          {content && (
            <div className="flex justify-end mt-3">
              <button
                onClick={() => copyCaption(content)}
                className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Copy
              </button>
            </div>
          )}
        </div>

        {/* Suggestions */}
        {suggestions && suggestions.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-semibold">Suggestions:</h3>
            <ul className="list-disc list-inside text-sm dark:text-gray-600">
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Comment Input */}
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full py-1 border border-gray-300 rounded text-sm px-2 dark:bg-gray-100 dark:text-gray-800"
        />
      </div>
    </div>
  );
};

export default InstagramUI;
