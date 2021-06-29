import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="service">
      <div className="pimg1">
        <div className="ptext">
          <span className="border">Services</span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>One to one Personal Training</h2>
        <h4>
          Would you like to get more from your workouts while enjoying your time
          at the gym?
        </h4>
        <p>
          Let's work together one-to-one to improve your fitness levels and
          reach your goals. Let's maximize the return of your efforts!
        </p>
        <p>
          I buid my training packages to suit your shcedule, abitlity and
          budget.
        </p>
        <p>
          My training techiniques consist of eveything from weightlifting
          coaching to mobilty work, to different varieties of cardio training.
        </p>
      </section>

      <div className="pimg2"></div>
      <section className="section section-light">
        <h2>Diet and Nutrition</h2>
        <h4>
          One of the most misunderstood aspects of imporiving your shape and
          performing at a higher level.
        </h4>
        <p>Nutrition doesn't need to be complicated or confusing.</p>
        <p>Follow simple steps to improve your food and eating.</p>
        <p>
          I offer guidance and explanations to help you make sense of your
          nutrition.
        </p>
        <p>
          I will give you tips on how to avoid and overcome temptations you face
          in your day to day.
        </p>
        <p>Learn to eat mindfully in a way that helps you reach your goals.</p>
      </section>

      <div className="pimg3"></div>

      <section className="section section-dark">
        <h2>Mindset Coaching</h2>
        <h4>Work on your thought processes to help you achieve your goals.</h4>
        <p>Learn to think clearly and realistically abut your goals.</p>
        <p>
          Learn to analyse and cope with setbacks, injuries or missed
          milestones.
        </p>
        <p>
          Release yourself from the burden of feeling like your underperforming.
        </p>
      </section>
      <div className="pimg4"></div>
    </div>
  );
};

export default Service;
