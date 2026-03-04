import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { getDocument } from '../../../../backend/controllers/documentController';

const getDocuments = async () => {
    try {
        const response = await axiosInstance.get(API_PATHS.DOCUMENTS.GET_DOCUMENTS);
        return response.data?.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch documents.' };
    }
};

const uploadDocument = async (formData) => {
    try {
        
    } catch (error) {
        throw error.response?.data || { message: 'Failed to upload document.' };
    }
};