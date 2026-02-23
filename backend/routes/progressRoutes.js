import express from 'express';

import {
    getDashboard,
} from '../controllers/progressController.js';

import protect from '../middleware/auth.js';
