import React from "react";

//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
import AboutUs from "./pages/AboutUs.js";

import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}
