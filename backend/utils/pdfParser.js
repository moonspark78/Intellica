import fs from 'fs/promises';
import { pdfParse } from 'pdf-parse';

/**
 * Extract text from PDF file
 * @param {string} filePath - Path to the PDF file
 * @returns {Promise<{text: string, numPages: number}>}
 */

