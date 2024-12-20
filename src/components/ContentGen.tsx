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
  {
    items: ["LinkedIn", "GitHub", "Twitter", "Instagram"],
    item: "platform",
  },
  { items: ["Short", "Medium", "Long"], item: "words" },
  {
    items: ["Professional", "Motivational", "Funny", "Casual", "Normal"],
    item: "tone",
  },
  {
    items: ["English", "Punjabi", "Hindi"],
    item: "language",
  },
];

const ContentGenerator: React.FC = () => {
  const [topic, setTopic] = useState<string>("");
  const [contentResponse, setContentResponse] = useState<ResponseData | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [platform, setPlatform] = useState<string>("LinkedIn");
  const [words, setWords] = useState<string>("Short");
  const [contentType, setContentType] = useState<string>("Professional");
  const [language, setLanguage] = useState<string>("English");

  const mapWords = (wordChoice: string): number => {
    switch (wordChoice.toLowerCase()) {
      case "short":
        return 100;
      case "medium":
        return 200;
      case "long":
        return 500;
      default:
        return 50;
    }
  };

  const handleGenerateContent = async () => {
    if (loading) return; // Prevent multiple calls when loading

    setLoading(true);
    setError(null);
    setContentResponse(null);

    try {
      const wordsNumber = mapWords(words);
      const response = await generateReply(
        platform,
        wordsNumber,
        contentType,
        language,
        topic
      );
      setContentResponse(response);
    } catch (err: any) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-50">
      {/* Dropdown Menus for platform, word count, tone, and language */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 mb-6">
        {dropdownOptions.map(({ items, item }) => {
          const stateMap: Record<
            string,
            [string, React.Dispatch<React.SetStateAction<string>>]
          > = {
            platform: [platform, setPlatform],
            words: [words, setWords],
            tone: [contentType, setContentType],
            language: [language, setLanguage],
          };

          const [value, setValue] = stateMap[item];

          return (
            <DropdownMenu
              key={item}
              items={items}
              value={value}
              onChange={setValue}
            />
          );
        })}
      </div>

      {/* Input field for topic */}
      <InputField
        topic={topic}
        setTopic={setTopic}
        onGenerate={handleGenerateContent}
        loading={loading}
      />

      {/* Error message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

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
