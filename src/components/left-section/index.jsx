// Components
import InputCard from "../shared/input-card";
import TestimonialCard from "../shared/testimonial-card";

// Constants
import { NOTIFICATIONS, TESTIMONIALS } from "../../utils/constants";
import { LEFT_SECTION_CONTENT } from "./constants";

// Styles
import "./styles.scss";

const NotificationSection = () => (
  <div className="flex-row first-section">
    <article className="header-wrap">
      <span>
        <img src={LEFT_SECTION_CONTENT.header?.icon} alt="Notification bell icon" />
      </span>
      <h1 className="header-title">{LEFT_SECTION_CONTENT.header?.title}</h1>
      <p className="header-description">{LEFT_SECTION_CONTENT.header?.description}</p>
    </article>

    <div className="notification-inputs">
      {NOTIFICATIONS?.map((item, index) => (
        <InputCard
          key={`notification-${item.type}-${index}`}
          label={item.label}
          placeholder={item.placeholder}
          type={item.type}
          icon={item.icon}
          footerText={item.footerText}
          cta={item.cta}
        />
      ))}
    </div>
  </div>
);

const WatchSection = () => (
  <div className="watch-section">
    <figure className="dashboard-image">
      <img
        src={LEFT_SECTION_CONTENT.watchSection?.image}
        alt="Whale analytics dashboard preview"
        className="dashboard-img"
      />
    </figure>
    <article>
      <span>
        <img src={LEFT_SECTION_CONTENT.watchSection?.icon} alt="Eye watching icon" />
      </span>
      <h2 className="watch-title">{LEFT_SECTION_CONTENT.watchSection?.title}</h2>
      <p className="watch-description">{LEFT_SECTION_CONTENT.watchSection?.description}</p>
    </article>
  </div>
);

const TestimonialSection = () => (
  <div className="testimonials">
    <h3 className="testimonials-title">{LEFT_SECTION_CONTENT.testimonials?.title}</h3>
    <div className="border-seprator" />
    <div className="testimonial-wrap">
      <figure>
        <img src={LEFT_SECTION_CONTENT.testimonials?.icon} alt="Star icon for testimonials" />
      </figure>
      <article>
        <div className="testimonials-list">
          {TESTIMONIALS?.map((testimonial, index) => (
            <TestimonialCard
              key={`testimonial-${index}`}
              quote={testimonial.quote}
              author={testimonial.author}
              designation={testimonial.designation}
            />
          ))}
        </div>
      </article>
    </div>
  </div>
);

const LeftSection = () => (
  <div className="left-side">
    <NotificationSection />
    <WatchSection />
    <TestimonialSection />
  </div>
);

export default LeftSection;