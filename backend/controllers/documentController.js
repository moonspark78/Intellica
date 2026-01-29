import { error } from "console";
import  Document  from "../models/Document.js";
import  Flashcard from '../models/Flashcard';
import Quiz from '../models/Quiz';
import {extractTextFromPDF} from '../utils/pdfParser.js';
import {chunkText} from '../utils/textChunker.js';
import fs from 'fs/promises';
import mongoose from "mongoose";


// @desc   Upload PDF document
// @route  POST /api/documents/upload
// @access Private
export const uploadDocument = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                error: "Please upload a PDF file.",
                statusCode: 400
            });
        }

        const {title} = req.body;

        if (!title) {
            // Delete uploaded file if no title provided
            await fs.unlink(req.file.path);
            return res.status(400).json({
                success: false,
                error: "Please provide a document title.",
                statusCode: 400
            });
        }

        // Construct the URL for the uploaded file
        const baseUrl = `http://localhost:${process.env.PORT || 8000}`;
        const fileUrl = `${baseUrl}/uploads/documents/${req.file.filename}`;

        // Create document record
        const document = await Document.create({
            userId: req.user.id,
            title,
            fileName: req.file.originalname,
            filePath: fileUrl, // Store the URL instead of the local path
            fileSize: req.file.size,
            status: "processing"
        });

        // Process PDF in background (in Production, use a queue like Bull)
        processPDF(document, req.file.path).catch(err => {
            console.error("Error processing PDF:", err);
        });


    } catch (error) {
        // Clean up file on error
        if (req.file) {
            await fs.unlink(req.file.path).catch(() => {});
        }
        next(error);
    }
};



// @desc   Get all documents
// @route  GET /api/documents
// @access Private
export const getDocuments = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};




// @desc   Get a single document by ID with chunks
// @route  GET /api/documents/:id
// @access Private
export const getDocument = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};



// @desc Delete a document by ID
// @route DELETE /api/documents/:id
// @access Private
export const deleteDocument = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};


// @desc   Update document title
// @route  PUT /api/documents/:id
// @access Private
export const updateDocument = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};