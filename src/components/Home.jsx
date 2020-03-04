import React from "react";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>
          Hello, I'm <span>Andrew Maddocks</span>.
          <br />
          I'm a full-stack web developer.
        </h1>
        <button>
          View My work <i id="arrow-icon" class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
export default Home;
