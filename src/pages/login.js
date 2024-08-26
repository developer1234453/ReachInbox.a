import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
 
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
