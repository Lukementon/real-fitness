import React from "react";
import "./Testimony.css";
import { AiFillStar } from "react-icons/ai";

const Testimony = () => {
  return (
    <div className="testimony">
      <div className="testimony_title_container">
        <h1 className="testimony_title ">Client Reviews</h1>
      </div>
      <div className="testimony_reviews">
        <div className="review">
          <div className="stars">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
          </div>
          <h3>Sophie Williams</h3>
          <p className="review_description">
            Jason is life changing for your physical and just as importantly,
            your mental health. Every session is new and challenging and my body
            is becoming what I've always wanted. I couldn't recommend Jason
            enough to anyone in any stage of their fitness/nutritional journey.
          </p>
        </div>
        <div className="review">
          <div className="stars">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
          </div>
          <h3>Carmel Dunne</h3>
          <p className="review_description">
            Fantastic trainer! I've been training with Jason for 18 months and
            have seen a huge improvement in my strength and fitness. I had Jason
            to thank when I reached the summit of Kilimanjaro with ease. He went
            above and beyond with my training for that adventure. Workouts are
            always challenging and always great fun!
          </p>
        </div>
        <div className="review">
          <div className="stars">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
          </div>
          <h3>Elaine Tuite</h3>
          <p className="review_description">
            Jason is one in a million, he knows his stuff. Iv been going to him
            nearly 2 years. Really f****ing pushes you to your max but knows
            your limits. Has a laugh with you while your busting your balls in a
            pool of sweat 😰 hands down the best 💙
          </p>
        </div>
        <div className="review">
          <div className="stars">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
          </div>
          <h3>Burt Kerins</h3>
          <p className="review_description">
            Have been with Jason over a month now. I found his knowledge of
            exercises, stretching and always varies your sessions. He is always
            positive and gets the most from you in every session. Would highly
            recommend him to anyone.
          </p>
        </div>
        <div className="review">
          <div className="stars">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
          </div>
          <h3>Sean Brosnan</h3>
          <p className="review_description">
            Excellent trainer. Sessions are extremely varied to keep you on your
            toes. You can tell Jason spends time tailoring each session to your
            individual need. No matter what your fitness level and goal, Jason
            will find a way to whip you into shape and have a bit of craic doing
            so. Couldn't recommend enoug
          </p>
        </div>
        <div className="review">
          <div className="stars">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
          </div>
          <h3>Kathleen Rowley</h3>
          <p className="review_description">
            As someone new to the gym and fitness Jason has been fantastic. My
            confidence has grown and my fitness and strength improved. He gets
            the balance between working to your level while also encouraging you
            to push yourself to reach new goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
