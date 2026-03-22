import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'
import quizService from '../../services/quizService'
import PageHeader from '../../components/common/PageHeader'
import Spinner from '../../components/common/Spinner'
import toast from 'react-hot-toast'
import Button from '../../components/common/Button'




const QuizTakePage = () => {

  const {quizId} = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);


  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await quizService.getQuizById(quizId);
        setQuiz(response.data);
      } catch (error) {
        toast.error("Failed to fetch quiz.")
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  }, [quizId])


  const handleOptionChange = (questionId, optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }))
  };


  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length -1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };


  return (
    <div>QuizTakePage</div>
  )
}

export default QuizTakePage