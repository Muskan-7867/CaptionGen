
import React, { useState } from "react";
import {  Response } from "../api/geminiapi";
import generateReply from "../api/generateResp";

const ContentGenerator: React.FC = () => {
  const [topic, setTopic] = useState<string>("");
  const [contentResponse, setContentResponse] = useState<Response | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateContent = async () => {
    setLoading(true);
    setError(null);
    setContentResponse(null);

    try {
      const response = await generateReply('instagram',3000, 'funny', 'punjabi', topic);
      console.log(response);
      
    //   setContentResponse(response);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Content Generator</h1>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic"
      />
      <button onClick={handleGenerateContent} disabled={loading || !topic}>
        {loading ? "Generating..." : "Generate Content"}
      </button>

      {error && <p>{error}</p>}

      {contentResponse && (
        <div>
          <h2>Generated Content</h2>
          <p>{contentResponse.content}</p>
          <h3>Suggestions</h3>
          <ul>
            {contentResponse.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;
