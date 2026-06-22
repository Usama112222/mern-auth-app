import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import SignupPage from './pages/signup'
import HomePage from './pages/home';

function App() {


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>

    </div>
  );
}

export default App
