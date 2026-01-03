import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom' 
import RegisterPage from './pages/Auth/RegisterPage';
import LoginPage from './pages/Auth/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const isAuthenticated = false;
  const loading = false;

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <p>Loading...</p>
      </div>
    )
  }



  return (
    <Router>
      <Routes>
        <Route 
          path='/' 
          element={isAuthenticated ? <Navigate to='/dashboard' replace /> : <Navigate to='/login' replace />} 
        />
        <Route path='/login' element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />

        {/* Protected Routes */}

        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  )
}

export default App