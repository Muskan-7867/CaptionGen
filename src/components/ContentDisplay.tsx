import React from "react";

interface ContentDisplayProps {
  content: string;
  suggestions: string[];
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ content, suggestions }) => {
  return (
    <div className="w-full max-w-3xl p-4 bg-blue-100 rounded shadow-md sm:p-6 md:p-8">
  {content ? (
    <>
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800">Generated Content</h2>
      <p className="mt-2 text-gray-700 whitespace-pre-wrap text-sm md:text-base">{content}</p>
      {suggestions.length > 0 && (
        <>
          <h3 className="mt-4 text-md md:text-xl font-semibold text-gray-800">Suggestions</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </>
      )}
    </>
  ) : (
    <p className="text-gray-500 text-sm md:text-base">Generated content will appear here...</p>
  )}
</div>

  );
};

export default ContentDisplay;
