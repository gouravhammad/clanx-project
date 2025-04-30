// React
import { useEffect, useState, useRef } from "react";

// Components
import InputCard from "../shared/input-card";
import TestimonialCard from "../shared/testimonial-card";

// Constants
import { NOTIFICATIONS, TESTIMONIALS } from "../../utils/constants";
import { LEFT_SECTION_CONTENT } from "./constants";

// Styles
import "./styles.scss";

const NotificationSection = () => {
  const notificationCarouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && notificationCarouselRef.current) {
        notificationCarouselRef.current.scrollLeft += 1;
        if (
          notificationCarouselRef.current.scrollLeft >=
          notificationCarouselRef.current.scrollWidth - notificationCarouselRef.current.clientWidth
        ) {
          notificationCarouselRef.current.scrollLeft = 0;
        }
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="flex-row first-section">
      <article className="header-wrap">
        <span>
          <img
            src={LEFT_SECTION_CONTENT.header?.icon}
            alt="Notification bell icon"
          />
        </span>
        <h1 className="header-title">{LEFT_SECTION_CONTENT.header?.title}</h1>
        <p className="header-description">
          {LEFT_SECTION_CONTENT.header?.description}
        </p>
      </article>

      <div 
        className="notification-inputs shadow-box" 
        ref={notificationCarouselRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...NOTIFICATIONS, ...NOTIFICATIONS].map((item, index) => (
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
};

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
        <img
          src={LEFT_SECTION_CONTENT.watchSection?.icon}
          alt="Eye watching icon"
        />
      </span>
      <h2 className="watch-title">{LEFT_SECTION_CONTENT.watchSection?.title}</h2>
      <p className="watch-description">
        {LEFT_SECTION_CONTENT.watchSection?.description}
      </p>
    </article>
  </div>
);

const TestimonialSection = () => {
  const testimonialCarouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && testimonialCarouselRef.current) {
        testimonialCarouselRef.current.scrollLeft += 1;
        if (
          testimonialCarouselRef.current.scrollLeft >=
          testimonialCarouselRef.current.scrollWidth - testimonialCarouselRef.current.clientWidth
        ) {
          testimonialCarouselRef.current.scrollLeft = 0;
        }
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="testimonials">
      <h3 className="testimonials-title">
        {LEFT_SECTION_CONTENT.testimonials?.title}
      </h3>
      <div className="border-seprator" />
      <div className="testimonial-wrap">
        <figure>
          <img
            src={LEFT_SECTION_CONTENT.testimonials?.icon}
            alt="Star icon for testimonials"
          />
        </figure>
        <article>
          <div 
            className="testimonials-list"
            ref={testimonialCarouselRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS]?.map((testimonial, index) => (
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
  )
};

const LeftSection = () => (
  <div className="left-side">
    <NotificationSection />
    <WatchSection />
    <TestimonialSection />
  </div>
);

export default LeftSection;