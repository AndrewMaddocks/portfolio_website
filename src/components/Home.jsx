import React from "react";

function Home() {
  return (
    <div id="home" className="home-container">
      <div className="home-content">
        <h1>
          Hello, I'm <span>Andrew Maddocks</span>.
        </h1>
        <h1>I'm a full-stack web developer.</h1>

        <a href="#portfolio">
          View My Work <i id="arrow-icon" class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
export default Home;
