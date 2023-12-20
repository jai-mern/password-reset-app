// ForgotPassword.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import changedApi from '../services/changedApi';

const ForgotPassword = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      // Make API call to initiate password reset
      await changedApi.post('/forgot-password', { email });

      // Redirect to a page indicating that the reset email has been sent
      navigate('/reset-email-sent'); // Use navigate instead of history.push
    } catch (error) {
      console.error('Error initiating password reset:', error);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Submit</button>
    </div>
  );
};

export default ForgotPassword;
