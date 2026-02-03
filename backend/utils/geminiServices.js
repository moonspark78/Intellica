import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { generateFlashcards } from '../controllers/aiController';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

if (!process.env.GEMINI_API_KEY) {
    console.error("FATAL ERROR: GEMINI_API_KEY is not set in environment variables.");
    process.exit(1);
}


/**
 *  Generate flaadcards from text
 *  @param {string} text - Document text
 *  @param {number} count - Number of flashcards to generate
 *  @returns {Promise<Array<{question: string, answer: string, difficulty: string}>>} -
 * */
export const generateFlashcards = async (text, count = 10) => {
    
};