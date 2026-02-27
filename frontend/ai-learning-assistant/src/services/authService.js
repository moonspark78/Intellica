import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

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
