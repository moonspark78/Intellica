import espress from 'express';
import {
    uploadDocument,
    getDocuments,
    getDocument,
    updateDocument,
    deleteDocument
} from '../controllers/documentController.js';
import protect from '../middleware/auth.js';
import upload from "../config/multer.js"

const router = espress.Router();

// All routes are protected
router.use(protect);

router.post('/upload', upload.single('file'), uploadDocument);