import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

const Success = () => {
  return (
    <div className="success">
      <div className="success-contents">
        <h3 className="success-title">Thank you for your message!</h3>
        <h3 className="success-message">We will contact you soon!</h3>
        <Link to="/" className="success-button">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Success;
