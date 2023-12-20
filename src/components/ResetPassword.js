// ResetPassword.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import changedApi from '../services/changedApi';

const ResetPassword = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [password, setPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      // Make API call to reset password
      await changedApi.post('/reset-password', { password });

      // Redirect to login page after successful password reset
      navigate('/login'); // Use navigate instead of history.push
    } catch (error) {
      console.error('Error resetting password:', error);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
