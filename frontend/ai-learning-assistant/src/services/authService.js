import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';
import { getProfile } from '../../../../backend/controllers/authController';

const login = async (email, password) => {
    try {
        const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, { 
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An unknown error occurred.' };
    }
};

const register = async (username, email, password) => {
    try {
        const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
            username,
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An unknown error occurred.' };
    }
};

const getProfile = async () => {
    try { 
        
    } catch (error) {
        throw error.response?.data || { message: 'An unknown error occurred.' };
    }
};