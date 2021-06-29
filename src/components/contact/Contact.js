import React, { useState } from "react";
import "./Contact.css";
import { FaFacebookF, FaEnvelope, FaInstagram } from "react-icons/fa";
import db from "../../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setLoading(false);
      alert("Please include a name, email and message");
    } else {
      setLoading(true);

      db.collection("messages")
        .add({
          name: name,
          email: email,
          phone: phone,
          message: message,
        })
        .then(() => {
          alert("Message has been Submitted");
          setLoading(false);
        })
        .catch(err => {
          alert(err.message);
          setLoading(false);
        });

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="info">
          <p>jason@realfitness.ie</p>
          <p>0872492346</p>
          <div className="contact-icons">
            <FaFacebookF className="facebook icon" size="1.5rem" />
            <FaInstagram className="instagram icon" size="1.5rem" />
            <FaEnvelope className="envelope icon" size="1.5rem" />
          </div>
        </div>
        <div className="contact-form">
          <h1 className="title">Message Me</h1>
          <form onSubmit={handleSubmit}>
            <p>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                className="name"
                type="text"
                name="name"
                placeholder="Name"
              />
            </p>
            <p>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="email"
                type="email"
                name="email"
                placeholder="Email"
              />
            </p>
            <p>
              <input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="phone"
                type="text"
                name="phone"
                placeholder="Phone"
              />
            </p>
            <p>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Message"
                className="text"
                name="message"
                rows="5"
              ></textarea>
            </p>

            <button
              className="button"
              style={{
                background: loading && "gray",
                color: loading && "white",
                cursor: loading && "not-allowed",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
