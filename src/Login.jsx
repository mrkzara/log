import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';  // Make sure to import the styles

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/table');
  };

  return (
    <div className="container">
      <div className="form">
        <h2 className="title">Login</h2>
        <button onClick={handleLogin} className="button">
          Login as Brent
        </button>
      </div>
    </div>
  );
}

export default Login;