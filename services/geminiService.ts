import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const consultProject = async (projectDescription: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a senior construction consultant for Ironcrest Developers, a high-end luxury builder. 
      A potential client has sent this inquiry: "${projectDescription}".
      
      Provide a brief, professional, and encouraging response (max 100 words). 
      Outline 2-3 key initial considerations (e.g., zoning, timeline, materials) for this specific type of project. 
      End with a call to action to schedule a site visit. 
      Tone: Sophisticated, knowledgeable, confident.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Low latency
      }
    });

    return response.text || "Thank you for your inquiry. Our team will review your project details and get back to you shortly.";
  } catch (error) {
    console.error("Gemini Consultation Error:", error);
    return "Thank you for your interest. We are currently experiencing high volume, but a representative will contact you within 24 hours.";
  }
};