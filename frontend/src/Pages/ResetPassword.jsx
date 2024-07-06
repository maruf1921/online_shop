import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/ResetPassword.css';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    token: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResetPassword = () => {
    console.log('Reset Password Function Executed', formData);
    // Add your reset password logic here
  };

  return (
    <div className="resetpassword">
      <div className="resetpassword-container">
        <h1>Reset Password</h1>
        <div className="resetpassword-fields">
          <input
            name="token"
            value={formData.token}
            onChange={handleChange}
            type="text"
            placeholder="Reset Token"
          />
          <input
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            type="password"
            placeholder="New Password"
          />
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <button onClick={handleResetPassword} className="reset-button">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
