import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";




const quizService ={
    getQuizzesForDocument,
    getQuizById,
    submitQuiz,
    getQuizResults,
    deleteQuiz,
};

export default quizService;