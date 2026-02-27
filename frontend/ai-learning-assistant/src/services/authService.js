import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

const login = async (email, password) => {
    try {
        
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An unknown error occurred.' };
    }
};
