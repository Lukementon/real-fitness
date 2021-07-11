import React, { useState } from "react";
import "./Contact.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import db from "../../firebase";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const recepient = ["jasonkavana@gmail.com"];

  const handleSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setLoading(false);
    } else {
      setLoading(true);

      // admin.firestore().collection('emails').add({
      //   to: 'name@email.com',
      //   message: {
      //     subject: 'Hello, World!',
      //     html: 'This is the<code>HTML</code> email body.',
      //   },
      // })

      db.collection("messages")
        .add({
          name: name,
          email: email,
          phone: phone,
          // message: message,
          message: {
            subject: "Real Fitness Message Submission",
            html: `${name} <br/> ${email} <br/> ${phone} <br/> ${message}`,
          },
          to: recepient,
        })
        .then(() => {
          history.push("/success");
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
            <a
              className="contact-icon"
              href="https://www.facebook.com/realfitnessrealpeople/"
            >
              <FaFacebookF className="facebook icon" size="1.5rem" />
            </a>
            <a
              className="contact-icon"
              href="https://instagram.com/realfitness_realpeople?utm_medium=copy_link"
            >
              <FaInstagram className="instagram icon" size="1.5rem" />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <h1 className="title">Message Me</h1>
          <form onSubmit={handleSubmit}>
            <p>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                required
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
                required
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
                required
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
