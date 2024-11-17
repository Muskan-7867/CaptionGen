import React from "react";

interface InstagramUIProps {
  postImage: string;
  content: string | undefined;
  suggestions: string[] | undefined;
  
}

const InstagramUI: React.FC<InstagramUIProps> = ({
  postImage,
  content,
  suggestions,
 
}) => (
  <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-800">
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center space-x-2">
        <img
          src="https://source.unsplash.com/50x50/?portrait"
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
      src={postImage || "https://via.placeholder.com/500x500"}
      alt="Post"
      className="object-cover object-center w-full h-72 dark:bg-gray-500"
    />

    <div className="p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            title="Like post"
            className="flex items-center justify-center"
          >
            {/* Like Icon SVG */}
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
            {/* Example user avatars */}
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
      <div className="space-y-3">
        <div>
          <h3 className="text-sm font-semibold mb-2 dark:text-gray-800">
            Captions:
          </h3>
          <ul className="pl-5 space-y-2 text-sm dark:text-gray-600">
            {content
              ? content.split("\n").map((line, index) => (
                  <li key={index}>{line}</li>
                ))
              : <li>Write a post...</li>}
          </ul>
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
  </div>
);

export default InstagramUI;
