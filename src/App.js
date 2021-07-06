import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./pages/Services";
import ContactPage from "./pages/ContactPage";
import Success from "./components/success/Success";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  if (isOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home toggle={toggle} isOpen={isOpen} />
          </Route>
          <Route path="/services">
            <Services toggle={toggle} isOpen={isOpen} />
          </Route>
          <Route path="/contact">
            <ContactPage toggle={toggle} isOpen={isOpen} />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
