import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/ForgetPassword.css';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSearch = () => {
    console.log('Search Function Executed', email);
    navigate('/reset-password');
  };

  return (
    <div className="forgetpassword">
      <div className="forgetpassword-container">
        <h1>Forget Password</h1>
        <div className="forgetpassword-fields">
          <input
            name="email"
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="forgetpassword-buttons">
          <button onClick={() => navigate('/')} className="cancel-button">
            Cancel
          </button>
          <button onClick={handleSearch} className="search-button">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
