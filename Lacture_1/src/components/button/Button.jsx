import React from 'react';
import './Button.css';

const Button = ({ label = "Click Me", type = "primary" }) => {
  return (
    <button className={`custom-btn ${type}`}>
      {label}
    </button>
  );
};

export default Button;