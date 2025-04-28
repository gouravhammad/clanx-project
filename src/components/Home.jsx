import React from "react";

//Components
import SignUpForm from "./SignUpForm";
import LeftSide from "./LeftSide";

//Styles
import "../app.scss";

const Home = () => {
  return (
    <section className="main-wrapper">
      <LeftSide />
      <div className="right-side">
        <SignUpForm />
      </div>
    </section>
  );
};

export default Home;
