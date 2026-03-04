import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { getDocument } from '../../../../backend/controllers/documentController';

const getDocuments = async () => {
    try {
        
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch documents.' };
    }
};