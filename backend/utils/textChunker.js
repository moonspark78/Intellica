/**
 *  Split text into chunks for better AI processing
 *  @param {string} text - The text to be chunked
 *  @param {number} chunkSize - Maximum size of each chunk
 *  @param {number} overlap - Number of overlapping characters between chunks
 *  @returns {Array<{content: string, chunkIndex; number, pageNumber: number}>}
 */

export const chunkText = (text, chunkSize = 500, overlap = 50) => {
  if (!text || text.trim().length === 0) {
    return [];
  }

  // Clean text while preserving paragraph structure
  const cleanedText = text
    .replace(/\r\n/g, "\n") // Normalize new lines
    .replace(/\s+/g, " ")
    .replace(/\n /g, "\n")
    .replace(/ \n/g, "\n")
    .trim();

  // Try to split by paragraphs ( single or double newlines)
  const paragraphs = cleanedText
    .split(/\n+/)
    .filter((p) => p.trim().length > 0);

  const chunks = [];
  let currentChunk = [];
  let currentWordCount = 0;
  let chunkIndex = 0;

  for (const paragraph of paragraphs) {
    const paragraphWords = paragraph.trim().split(/\s+/);
    const paragraphWordCount = paragraphWords.length;

    // If single paragraph exceeds chunkSize, split by words
    if (paragraphWordCount > chunkSize) {
      if (currentChunk.length > 0) {
        chunks.push({
          content: currentChunk.join("\n\n"),
          chunkIndex: chunkIndex++,
          pageNumber: 0,
        });
        currentChunk = [];
        currentWordCount = 0;
      }

      // Split large paragraph into words-based chunks
      for (let i = 0; i < paragraphWords.length; i += chunkSize - overlap) {
        const chunkWords = paragraphWords.slice(i, i + chunkSize);
        chunks.push({
          content: chunkWords.join(" "),
          chunkIndex: chunkIndex++,
          pageNumber: 0,
        });

        if (i + chunkSize >= paragraphWords.length) break;
      }
      continue;
    }
    // If adding this paragraph exceeds chunkSize, save current chunk
    if (currentWordCount + paragraphWordCount > chunkSize && currentChunk.length > 0){
        chunks.push({
            content: currentChunk.join("\n\n"),
            chunkIndex: chunkIndex++,
            pageNumber: 0,
        });
    }
  }
};
