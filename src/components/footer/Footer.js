import React from "react";
import "./Footer.css";
import { FaFacebookF, FaEnvelope, FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer_contents">
        <div className="social_links">
          <FaFacebookF className="facebook icon" size="1.5rem" />
          <FaInstagram className="instagram icon" size="1.5rem" />
          <FaEnvelope className="envelope icon" size="1.5rem" />
        </div>
        <div className="footer_title">
          <p className="footer_title_text">Real Fitness &copy;</p>
        </div>
        <div className="designer_contents">
          <p className="designer_contents_text">Website by Luke Menton</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
