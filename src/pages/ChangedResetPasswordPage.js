// pages/ResetPasswordPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import ResetPassword from '../components/ResetPassword';

const ResetPasswordPage = () => {
  const { token } = useParams();

  return (
    <div>
      <h2>Reset Password</h2>
      <p>Token: {token}</p>
      <ResetPassword />
    </div>
  );
};

export default ResetPasswordPage;
