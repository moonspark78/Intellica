import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { use } from 'react';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long'],
    },
});