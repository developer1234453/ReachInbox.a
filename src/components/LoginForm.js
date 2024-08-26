import React from 'react';

const LoginForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="max-w-sm mx-auto my-8 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
