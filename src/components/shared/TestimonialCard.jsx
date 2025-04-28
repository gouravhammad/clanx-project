import React from 'react';

const TestimonialCard = ({ quote, author, designation }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-author">{author}, <span>{designation}</span></p>
      <p className="testimonial-quote">"{quote}"</p>
      
    </div>
  );
};

export default TestimonialCard;
