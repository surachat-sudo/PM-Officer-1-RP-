
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function queryPersonnelInfo(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User asks: ${query}. Please provide information specifically about the Office of the Prime Minister of Thailand (สำนักนายกรัฐมนตรี). If the information is about current personnel, names, or roles, try to be accurate. If unsure, state so. Answer in Thai.`,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "You are an expert on the structure and personnel of the Thai Government, specifically the Office of the Prime Minister. Provide concise, formal, and accurate answers in Thai."
      },
    });

    const text = response.text || "ไม่พบข้อมูลที่ต้องการ";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map(chunk => ({
      title: chunk.web?.title || "แหล่งข้อมูล",
      uri: chunk.web?.uri
    })).filter(s => s.uri) || [];

    return { text, sources };
  } catch (error) {
    console.error("Gemini Query Error:", error);
    return { text: "ขออภัย เกิดข้อผิดพลาดในการเชื่อมต่อข้อมูล กรุณาลองใหม่ภายหลัง", sources: [] };
  }
}
