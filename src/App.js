import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle.js";
//Import Pages
import AboutUs from "./pages/AboutUs.js";
import ContactUs from "./pages/ContactUs.js";
import OurWork from "./pages/OurWork.js";
import Nav from "./components/Nav.js";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
