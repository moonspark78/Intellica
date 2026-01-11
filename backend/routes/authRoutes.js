import express from 'express';
import {body} from 'express-validator';
import {
    register,
    login,
    getProfile,
    updateProfile,
    changePassword
} from "../controllers/authController.js";

import protect from "../middleware/auth.js";

const router = express.Router();

// Validation middleware