// Styles
import './styles.scss'

// Components
import InputCard from "../shared/input-card";
import TestimonialCard from "../shared/testimonial-card";

// Constants
import {
  NOTIFICATIONS,
  TESTIMONIALS,
} from "../../utils/constants";
import { LEFT_SECTION_CONTENT } from "./constants";

const LeftSection = () => {

  const { header, watchSection, testimonials } = LEFT_SECTION_CONTENT;

  return (
    <div className="left-side">
      <div className="flex-row first-section">
        <article className="header-wrap">
          <span>
            <img src={header.icon} alt="bell icon" />
          </span>
          <h1 className="header-title">{header.title}</h1>
          <p className="header-description">{header.description}</p>
        </article>

        <div className="notification-inputs">
          {NOTIFICATIONS.map((notification, idx) => (
            <InputCard
              key={`input-card-${notification.type}-${idx}`}
              label={notification.label}
              placeholder={notification.placeholder}
              type={notification.type}
              icon={notification.icon}
              footerText={notification.footerText}
              cta={notification.cta}
            />
          ))}
        </div>
      </div>

      <div className="watch-section">
        <figure className="dashboard-image">
          <img
            src={watchSection.image}
            alt="Whale Dashboard"
            className="dashboard-img"
          />
        </figure>
        <article>
          <span>
            <img src={watchSection.icon} alt="eye icon" />
          </span>
          <h2 className="watch-title">{watchSection.title}</h2>
          <p className="watch-description">{watchSection.description}</p>
        </article>
      </div>

      <div className="testimonials">
        <h3 className="testimonials-title">{testimonials.title}</h3>
        <div className="border-seprator" />
        <div className="testimonial-wrap">
          <figure>
            <img src={testimonials.icon} alt="star icon" />
          </figure>
          <article>
            <div className="testimonials-list">
              {TESTIMONIALS.map((testimonial, idx) => (
                <TestimonialCard
                  key={`tertimonial-card-${testimonial.type}-${idx}`}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  designation={testimonial.designation}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;