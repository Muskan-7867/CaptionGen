import React from "react";

interface InputFieldProps {
  topic: string;
  setTopic: (value: string) => void;
  onGenerate: () => void;
  loading: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ topic, setTopic, onGenerate, loading }) => {
  return (
    <div className="w-full max-w-3xl mb-6">
  <input
    type="text"
    value={topic}
    onChange={(e) => setTopic(e.target.value)}
    placeholder="Enter topic"
    className="w-full p-2 border border-black rounded focus:outline-none sm:p-3 md:p-4"
  />
  <div className="flex justify-end mt-2">
    <button
      onClick={onGenerate}
      disabled={loading || !topic}
      className="px-3 py-1 sm:px-4 sm:py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-blue-300"
    >
      {loading ? "Generating..." : "Generate"}
    </button>
  </div>
</div>

  );
};

export default InputField;
