import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

// Constants
import { DEFAULT_CARD_DATA } from './constants';

const TestimonialCard = ({ 
  quote = DEFAULT_CARD_DATA.quote, 
  author = DEFAULT_CARD_DATA.author, 
  designation = DEFAULT_CARD_DATA.designation
}) => (
  <div className="testimonial-card">
    <p className="testimonial-author">
      {author}, <span>{designation}</span>
    </p>
    <p className="testimonial-quote">"{quote}"</p>
  </div>
);

TestimonialCard.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  designation: PropTypes.string,
};

export default TestimonialCard;