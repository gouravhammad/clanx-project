//Icons
import IconBell from "../assets/icons/bell-fill.svg";
import ImageCohorts from "../assets/cohorts.png";
import IconEye from "../assets/icons/eye.svg";
import IconStar from "../assets/icons/star.svg";

//Components
import InputCard from "./shared/InputCard";
import TestimonialCard from "./shared/TestimonialCard";

// Data
import { notifications, testimonials } from "../utils/content";

const LeftSide = () => {
  return (
    <div className="left-side">
      <div className="flex-row first-section">
        <article className="header-wrap">
          <span>
            <img src={IconBell} alt="bell Icon" />
          </span>
          <h1 className="header-title">
            Get notified when a highly correlated whale makes a move{" "}
          </h1>
          <p className="header-description">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </article>

        <div className="notification-inputs">
          {notifications.map((notif, idx) => (
            <InputCard
              key={idx}
              label={notif.label}
              placeholder={notif.placeholder}
              type={notif.type}
              icon={notif.icon}
              footerText={notif.footerText}
              cta={notif.cta}
            />
          ))}
        </div>
      </div>
      <div className="watch-section">
        <figure className="dashboard-image">
          <img
            src={ImageCohorts}
            alt="Whale Dashboard"
            className="dashboard-img"
          />
        </figure>
        <article>
          <span>
            <img src={IconEye} alt="bell Icon" />
          </span>
          <h2 className="watch-title">Watch what the whales are doing</h2>
          <p className="watch-description">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </article>
      </div>

      <div className="testimonials">
        <h3 className="testimonials-title">Testimonials</h3>
        <div className="border-seprator" />
        <div className="testimonial-wrap">
          <figure>
            <img src={IconStar} alt="star icon" />
          </figure>
          <article>
            <div className="testimonials-list">
              {testimonials.map((testimonial, idx) => (
                <TestimonialCard
                  key={idx}
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
export default LeftSide;
