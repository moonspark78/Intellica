import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import authService from '../../services/authService';
import { BrainCircuit, Mail, Lock, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { set } from 'mongoose';

const LoginPage = () => {

  const [email, setEmail] = useState('test@program.com');
  const [password, setPassword] = useState('Test@1234');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { token, user } = await authService.login(email, password);
      login(user, token);
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to login. Please check your credentials.');
      toast.error(err.message || 'Failed to login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=''>
      <div className=""/>
      <div className="">
        <div className="">
          {/* Hearder */}
          <div className="">
            <div className="">
              <BrainCircuit className="" strokeWidth={2}/>
            </div>
            <h1 className=''>
              Welcome Back
            </h1>
            <p className=''>
              Sign in to your account to continue
            </p>
          </div>

          {/* Form */}
          <div className="">
            {/* Email Field */}
            <div className="">
              <label className="">
                Email
              </label>
              <div className="">
                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200
                   ${focusedField === 'email' ? 'text-emerald-500' : 'text-slate-400'}`}>
                    <Mail className="" strokeWidth={2}/>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className=""
                  placeholder='test@example.com'
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="">
              <label className="">
                Password
              </label>
              <div className="">
                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200
                   ${focusedField === 'password' ? 'text-emerald-500' : 'text-slate-400'}`}>
                    <Lock className="" strokeWidth={2}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage