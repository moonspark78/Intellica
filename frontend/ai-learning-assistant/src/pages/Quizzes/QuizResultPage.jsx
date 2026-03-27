import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import quizService from '../../services/quizService';
import PageHeader from '../../components/common/PageHeader';
import Spinner from '../../components/common/Spinner';
import toast from 'react-hot-toast';
import { ArrowLeft, CheckCircle2, XCircle, Trophy, Target, BookOpen } from 'lucide-react';



const QuizResultPage = () => {

  const { quizId } = useParams();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);



  return (
    <div>QuizResultPage</div>
  )
}

export default QuizResultPage