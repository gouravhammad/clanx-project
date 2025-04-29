import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss'

// Constants
import { INPUT_TYPE, LOCH_LANDING_PAGE_LINK } from '../../utils/constants';
import { DEFAULT_FORM_DATA, ERROR_MESSAGE_EMAIL } from './constants';

// Utils
import { isValidEmail } from '../../utils/helpers';

const SignUpForm = ({
  title = DEFAULT_FORM_DATA.title,
  placeholder = DEFAULT_FORM_DATA.placeholder,
  buttonText = DEFAULT_FORM_DATA.buttonText,
  description = DEFAULT_FORM_DATA.description
}) => {

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMessage(ERROR_MESSAGE_EMAIL);
      return;
    }

    // Redirect on successful validation
    window.location.href = LOCH_LANDING_PAGE_LINK;
  };

  return (
    <div className="sign-up-form">
      <h2 className="form-title">{title}</h2>
      <form className="form-content" onSubmit={handleSubmitForm}>
        <input 
          type={INPUT_TYPE.EMAIL} 
          placeholder={placeholder}
          className="form-input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errorMessage) setErrorMessage('');
          }}
          required
        />
        <button 
          type={INPUT_TYPE.SUBMIT}
          className="form-button"
        >
          {buttonText}
        </button>
      </form>
      {errorMessage && <p className="form-error">{errorMessage}</p>}
      <p className="form-description">{description}</p>
    </div>
  );
};

SignUpForm.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  description: PropTypes.string
};

export default SignUpForm;