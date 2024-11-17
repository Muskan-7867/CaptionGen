import React, { useState } from "react";
import generateReply from "../api/generateResp";
import DropdownMenu from "./Dropdown";
import InputField from "./Inputfield";
import UiDistributer from "./UiDistributer";

interface ResponseData {
  content: string;
  suggestions: string[];
}

const dropdownOptions = [
  { label: "Platform", items: ["LinkedIn", "Twitter", "GitHub", "Instagram"], item: "platform" },
  { label: "Words", items: ["Short", "Medium", "Long"], item: "words" },
  { label: "Tone", items: ["Professional", "Motivational", "Funny", "Casual", "Normal"], item: "tone" },
  { label: "Language", items: ["English", "Punjabi", "Hindi"], item: "language" },
];

const ContentGenerator: React.FC = () => {
  const [topic, setTopic] = useState<string>("");
  const [contentResponse, setContentResponse] = useState<ResponseData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [platform, setPlatform] = useState<string>("LinkedIn");
  const [words, setWords] = useState<string>("Short");
  const [contentType, setContentType] = useState<string>("Professional");
  const [language, setLanguage] = useState<string>("English");
  const [btnClicked, setBtnClicked] = useState<boolean>(false);

  const mapWords = (wordChoice: string): number => {
    switch (wordChoice.toLowerCase()) {
      case "short":
        return 50;
      case "medium":
        return 100;
      case "long":
        return 200;
      default:
        return 100;
    }
  };

  const handleGenerateContent = async () => {
    setLoading(true);
    setError(null);
    setContentResponse(null);
    setBtnClicked(true);  

    try {
      const wordsNumber = mapWords(words);
      const response = await generateReply(platform, wordsNumber, contentType, language, topic);
      setContentResponse(response);
    } catch (err: any) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setBtnClicked(false);  
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-50">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Caption Generator</h1>

      {/* Dropdown Menus for platform, word count, tone, and language */}
      <div className="flex space-x-4 mb-6">
        {dropdownOptions.map(({ label, items, item }) => {
          const stateMap: Record<string, [string, React.Dispatch<React.SetStateAction<string>>]> = {
            platform: [platform, setPlatform],
            words: [words, setWords],
            tone: [contentType, setContentType],
            language: [language, setLanguage],
          };

          const [value, setValue] = stateMap[item];

          return (
            <DropdownMenu
              key={item}
              label={label}
              items={items}
              value={value}
              onChange={setValue}
            />
          );
        })}
      </div>

      {/* Input field for topic */}
      <InputField topic={topic} setTopic={setTopic} onGenerate={handleGenerateContent} loading={loading} />

      {/* Error message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Button to trigger content generation */}
      <button
        onClick={handleGenerateContent}
        disabled={btnClicked || loading} 
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-300"
      >
        {loading ? "Generating..." : "Generate Content"}
      </button>

      {/* Display generated content */}
      {contentResponse && !loading && (
        <div className="mt-8">
          <UiDistributer
            platform={platform}
            content={contentResponse?.content}
            suggestions={contentResponse?.suggestions}
          />
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;
