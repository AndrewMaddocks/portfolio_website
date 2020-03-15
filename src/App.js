import React from "react";

import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
function App() {
  return (
    <div id="App">
      <Home />
      <Nav />
      <About />
      <Portfolio />

      <Contact />
    </div>
  );
}
export default App;
