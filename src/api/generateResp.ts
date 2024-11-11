import axios from "axios";
async function generateReply(
    socialMedia: string = 'Linkdein', 
    words: number =100, 
    manner:string = 'Professional',
    lang:string='English',
    userQuery: string
): 
    Promise<string> {
  try {
    // Ensure API key exists
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      throw new Error("API key is missing.");
    }

    // Making the API request
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        contents: [
          {
            parts: [
              {
                text: `Generate a caption for ${socialMedia} with a word limit of ${words} words. The caption should be in response to the occasion of "${userQuery}". The tone should be ${manner}, and the caption must be in ${lang}. If a URL is required, simply write "Insert URL here." Do not include any additional descriptions, comments, or context.`,
              },
            ],
          },
        ],
      }
    );

    // Get the content from the response (or a fallback message)
    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Busy! Message you later.";

    return reply;  // Ensure to return the generated reply

  } catch (error: any) {
    console.error("Error generating reply:", error.message);
    return "Error occurred while generating the reply.";  // Fallback error message
  }
}

export default generateReply;
8                                                                 