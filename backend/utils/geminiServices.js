import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GENAI_API_KEY });

if (!process.env.GENAI_API_KEY) {
    console.error("FATAL ERROR: GENAI_API_KEY is not set in environment variables.");
    process.exit(1);
}