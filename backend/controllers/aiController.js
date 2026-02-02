import Document from '../models/Document.js';
import Flashcard from '../models/Flashcard.js';
import Quiz from '../models/Quiz.js';
import ChatMessage from '../models/ChatMessage.js';
import * as geminiService from '../utils/geminiServices.js';
import { findRelevantChunks } from '../utils/textChunker.js'
