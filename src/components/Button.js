import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 bg-blue-500 text-white rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
