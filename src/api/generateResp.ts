import axios from "axios";

interface GenerateReplyResponse {
  content: string;
  suggestions: string[];
}

async function generateReply(
  socialMedia: string = 'LinkedIn', 
  words: number = 100, 
  manner: string = 'Professional',
  lang: string = 'English',
  userQuery: string
): Promise<GenerateReplyResponse> {
  try {
    // Ensure API key exists
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      throw new Error("API key is missing.");
    }

    // Construct the request URL with backticks
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    // Construct the prompt with backticks
    const prompt = `Generate a caption for ${socialMedia} with a word limit of ${words} words. The caption should be in response to the occasion of "${userQuery}". The tone should be ${manner}, and the caption must be in ${lang}. If a URL is required, simply write "Insert URL here." Do not include any additional descriptions, comments, or context. Additionally, provide three alternative suggestions for the caption.dont give multiple caption just give one best caption`;

    // Making the API request
    const response = await axios.post(url, {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    });

    // Extract main content
    const content =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Busy! Message you later.";

    // Assuming suggestions are separated by new lines after a specific keyword
    const suggestions: string[] = [];
    const suggestionKeyword = "Suggestions:";
    const suggestionIndex = content.indexOf(suggestionKeyword);

    if (suggestionIndex !== -1) {
      const suggestionsText = content.substring(suggestionIndex + suggestionKeyword.length);
      suggestions.push(
        ...suggestionsText
          .split('\n')
          .map((s: string) => s.trim())
          .filter((s: string) => s)
      );
    }

    // If no suggestions found, return empty array
    return {
      content: suggestionIndex !== -1 ? content.substring(0, suggestionIndex).trim() : content,
      suggestions: suggestions,
    };

  } catch (error: any) {
    console.error("Error generating reply:", error.message);
    return {
      content: "Error occurred while generating the reply.",
      suggestions: [],
    };
  }
}

export default generateReply;
