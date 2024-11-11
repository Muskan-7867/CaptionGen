import axios from 'axios';

const GEMINI_API_URL = 'https://esm.run/@google/generative-ai'; 
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export interface Response {
  content: string;
  suggestions: string[];
}

export const generateContent = async (topic: string): Promise<Response> => {
  try {
    const response = await axios.post(
      GEMINI_API_URL,
      { topic },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json', 
        }
      }
    );

    return response.data as Response;
  } catch (error: any) {
    console.error("Error details:", error.response?.data || error.message);
    throw new Error("Failed to generate content. ");
  }
};
