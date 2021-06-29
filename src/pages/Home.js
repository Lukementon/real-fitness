import React from "react";
import Banner from "../components/banner/Banner";
import Nav from "../components/nav/Nav";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";
import Testimony from "../components/testimony/Testimony";
import WhatWeDo from "../components/whatwedo/WhatWeDo";

const Home = ({ toggle, isOpen }) => {
  return (
    <div className="home">
      <Nav toggle={toggle} isOpen={isOpen} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Banner />
      <WhatWeDo />
      <Testimony />
      <Footer />
    </div>
  );
};

export default Home;
