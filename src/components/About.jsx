import React from "react";
import Nav from "./Nav";
import Llama from "../assets/3A0BDC1F-B223-4193-804B-B35BA3C1228D_1_105_c.jpeg";
function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <h1>ABOUT</h1>

        <section>
          <div className="content">
            <p>
              I'm a full stack web developer from Lehi, Utah. I chose to be a
              developer because I have a beautiful wife that I love and I know I
              can care for with this career. Also, I love to build things and
              create things for everyone and make my creations accesible to all
              people no matter their disabilities. I also enjoy the satisfaction
              of solving hard problems after what seems to be the end of the
              world. By the way, check out my awesome work.
            </p>
          </div>
          <div className="imageBox">
            <img src={Llama} alt="me and my dog" />
          </div>
        </section>
        <div className="skills">
          <h1 className="skills-title">What I know...</h1>
          <i class="devicon-html5-plain-wordmark colored"></i>
          <i class="devicon-css3-plain-wordmark colored"></i>
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-nodejs-plain-wordmark colored"></i>
          <i class="devicon-react-original-wordmark colored"></i>
          <i class="devicon-sass-original colored"></i>
          <i class="devicon-less-plain-wordmark colored"></i>
          <i class="devicon-git-plain-wordmark colored"></i>
        </div>
      </div>
    </div>
  );
}
export default About;
