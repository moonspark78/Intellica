import fs from 'fs/promises';
import { PDFParse } from 'pdf-parse';

/**
 * Extract text from PDF file
 * @param {string} filePath - Path to the PDF file
 * @returns {Promise<{text: string, numPages: number}>}
 */

export const extractTextFromPDF = async (filePath) => {
    try{
            const dataBuffer = await fs.readFile(filePath);
            // pdf-parse expects a Unint8Array, not a Buffer
            const parser = new PDFParse(new Uint8Array(dataBuffer));
            const data = await parser.getText();
            
    } catch (error) {}
};