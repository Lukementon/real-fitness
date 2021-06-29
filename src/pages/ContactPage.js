import React from "react";
import Contact from "../components/contact/Contact";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";

const ContactPage = ({ toggle, isOpen }) => {
  return (
    <div>
      <Nav isOpen={isOpen} toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
