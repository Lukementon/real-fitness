import React from "react";
import "./Banner.css";
import banner from "../../img/banner-color.jpg";

const Banner = () => {
  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center center",
      }}
      className="banner"
    >
      <div className="banner_contents">
        <h1 className="banner_title">Real Fitness</h1>
        <p className="banner_description">
          At Real Fitness we’re passionate about developing a
          sustainable,healthy and balanced approach to fitness and nutrition. I
          love helping my clients succeed, you will always find me friendly and
          approachable, ready to give you the support and motivation you need.
        </p>
        <div className="banner_buttons">
          <button className="banner_button">Contact</button>
        </div>
        <div className="banner--fadeBottom" />
      </div>
    </header>
  );
};

export default Banner;
