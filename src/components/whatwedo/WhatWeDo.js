import React from "react";
import "./WhatWeDo.css";
import jason from "../../img/jason.jpg";
import bigLogo from "../../img/bigLogo.png";
import { FaFacebookF, FaEnvelope, FaInstagram } from "react-icons/fa";
import { useHistory } from "react-router-dom";
const WhatWeDo = () => {
  const history = useHistory();
  return (
    <div className="whatWeDo">
      <div className="whatWeDo_container">
        <div className="description_container">
          <h1 className="title">What We Do</h1>
          <p className="description">
            Real Fitness is a training service that focuses on the big picture.
            Instead of exclusively focusing on training, we believe in bringing
            together fitness, nutrition and sustainability in order to achieve
            goals.
            <br />
            I promise to make your workouts fun, never boring. I will work with
            you to create effective and lasting habits. We will work closely
            together to build a routine that fits your lifestyle, tailored to
            suit your level of experience and fitness.
            <br />
            Having lost over 20kg (3 stone) myself, in 2015. I know the keys to
            success and I know you can do it too. I love helping my clients
            succeed, you will always find me friendly and approachable, ready to
            give you the support and motivation you need.
            <br />
            I’m based in Kells, Co. Meath so please contact me via Facebook,
            email or phone for any more details.
            <br />
            Looking forward to hearing from you!
          </p>

          <div className="icon_container">
            <div className="icons">
              <a href="https://www.facebook.com/realfitnessrealpeople/">
                <FaFacebookF className="facebook icon" size="1.5rem" />
              </a>
              <a href="https://instagram.com/realfitness_realpeople?utm_medium=copy_link">
                <FaInstagram className="instagram icon" size="1.5rem" />
              </a>
              <FaEnvelope
                onClick={() => history.push("/contact")}
                className="envelope icon "
                size="1.5rem"
              />
            </div>
            <h4>jason@realfitness.ie</h4>
          </div>
        </div>

        <div className="img_container">
          <img className="jason logo" src={jason} alt="" />
          <img className="big-logo logo" src={bigLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
