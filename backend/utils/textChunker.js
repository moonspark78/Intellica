/** 
 *  Split text into chunks for better AI processing
 *  @param {string} text - The text to be chunked
 *  @param {number} chunkSize - Maximum size of each chunk
 *  @param {number} overlap - Number of overlapping characters between chunks
 *  @returns {Array<{content: string, chunkIndex; number, pageNumber: number}>}
 */

export const chunkText = (text, chunkSize = 500, overlap = 50)=> {
    if (!text || text.trim().length === 0){
        return [];
    }

    // Clean text while preserving paragraph structure
    const cleanedText = text
        .replace(/\r\n/g, '\n') // Normalize new lines
        .replace(/\s+/g, ' ')
        .replace(/\n /g, '\n')
        .replace(/ \n/g, '\n')
        .trim();

};