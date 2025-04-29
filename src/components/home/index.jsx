import React from "react";

// Styles
import './styles.scss';

// Components
import SignUpForm from "../sign-up-form";
import LeftSection from "../left-section";

const Home = () => {
  return (
    <section className="main-wrapper">
      <LeftSection />
      <div className="right-side">
        <SignUpForm />
      </div>
    </section>
  );
};

export default Home;
