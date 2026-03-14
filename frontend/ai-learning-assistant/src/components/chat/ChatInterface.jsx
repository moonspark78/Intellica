import React, {useState, useEffect, useRef} from 'react'
import { Send, MessageSquare, Sparkles } from "lucide-react"
import { useParams } from 'react-router-dom'
import aiService from '../../services/aiService';
import { useAuth } from '../../context/AuthContext';
import Spinner from '../common/Spinner';
import MarkdownRenderer from "../common/MarkdownRenderer";

const ChatInterface = () => {

  const {id: documentId} = useParams();
  const {user} = useAuth();

  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState();


  return (
    <div>ChatInterface</div>
  )
}

export default ChatInterface