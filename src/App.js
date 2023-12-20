// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import ForgotPassword from './pages/ForgotPassword';
import ChangedResetPasswordPage from './pages/ChangedResetPasswordPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ChangedResetPasswordPage />} />
      </Routes>
    </Router>
  );
};

export default App;
