import React from "react";
import Nav from "../components/nav/Nav";
import Service from "../components/services/Service";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";

const Services = ({ toggle, isOpen }) => {
  return (
    <>
      <Nav isOpen={isOpen} toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Service />
      <Footer />
    </>
  );
};

export default Services;
