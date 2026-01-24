import espress from 'express';
import {
    uploadDocument,
    getDocuments,
    getDocument,
    updateDocument,
    deleteDocument
} from '../controllers/documentController.js';
import protect from '../middleware/auth.js';

const router = espress.Router();