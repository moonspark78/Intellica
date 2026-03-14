import React, {useState, useEffect, useRef} from 'react'
import { Send, MessageSquare, Sparkles } from "lucide-react"
import { useParams } from 'react-router-dom'
import aiService from '../../services/aiService';
import { useAuth } from '../../context/AuthContext';
import Spinner from '../common/Spinner';
import MarkdownRenderer from "../common/MarkdownRenderer";

const ChatInterface = () => {

  const {id: documentId} = useParams();


  return (
    <div>ChatInterface</div>
  )
}

export default ChatInterface