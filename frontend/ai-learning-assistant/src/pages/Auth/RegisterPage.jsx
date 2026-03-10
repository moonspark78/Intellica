import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import { BrainCircuit, Mail, Lock, ArrowRight } from 'lucide-react';
import  toast  from 'react-hot-toast';

const RegisterPage = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password.length < 12){
      setError("Password must be at least 12 characters long.")
      return
    }

    setError('');
    setLoading(true);

    try {
      await authService.register(username, email, password);
      login(user, token);
      toast.success('Registration successful! Please Login.');
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Failed to register. Please try again.');
      toast.error(err.message || 'Failed to register.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>RegisterPage</div>
  )
}

export default RegisterPage