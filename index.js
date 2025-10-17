import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from "@google/genai";

const app = express();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const GEMINI_MODEL = "gemini-2.5-flash";

app.use(cors());
app.use(express.json());

function extractText(resp) {
  try {
    const text =
      resp?.response?.candidates?.[0]?.content?.parts?.[0]?.text ??
      resp?.candidates?.[0]?.content?.parts?.[0]?.text ??
      resp?.response?.candidates?.[0]?.content?.text;

    return text ?? JSON.stringify(resp, null, 2);
  } catch (err) {
    console.error("Error extracting text:", err);
    return JSON.stringify(resp, null, 2);
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ready on http://localhost:${PORT}`));