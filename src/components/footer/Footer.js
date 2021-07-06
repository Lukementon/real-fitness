import React from "react";
import "./Footer.css";
import { FaFacebookF, FaEnvelope, FaInstagram } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  return (
    <div className="footer">
      <div className="footer_contents">
        <div className="social_links">
          <a href="https://www.facebook.com/realfitnessrealpeople/">
            <FaFacebookF className="facebook icon" size="1.5rem" />
          </a>
          <a href="https://instagram.com/realfitness_realpeople?utm_medium=copy_link">
            <FaInstagram className="instagram icon" size="1.5rem" />
          </a>
          <FaEnvelope
            onClick={() => history.push("/contact")}
            className="envelope icon"
            size="1.5rem"
          />
        </div>
        <div className="footer_title">
          <p className="footer_title_text">Real Fitness &copy;</p>
        </div>
        <div className="designer_contents">
          <a href="https://www.lukementon.com/">
            <p className="designer_contents_text">Website by Luke Menton</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
