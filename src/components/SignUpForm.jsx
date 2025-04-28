import React from 'react';

const SignUpForm = ({
  title = "Sign up for exclusive access.",
  placeholder = "Your email address",
  buttonText = "Get started",
  description = "You'll receive an email with an invite link to join."
}) => {
  return (
    <div className="sign-up-form">
      <h2 className="form-title">{title}</h2>
      <form className="form-content">
        <input 
          type="email" 
          placeholder={placeholder}
          className="form-input"
        />
        <button 
          type="submit" 
          className="form-button"
        >
          {buttonText}
        </button>
      </form>
      <p className="form-description">{description}</p>
    </div>
  );
};

export default SignUpForm;
