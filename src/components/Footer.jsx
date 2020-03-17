import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://twitter.com/maddocks_andrew">
            <i class="fab fa-twitter"></i>{" "}
          </a>
          <a href="http://www.linkedin.com/in/andrew-maddocks">
            <i class="fab fa-linkedin-in"></i>{" "}
          </a>
          <a href="https://github.com/AndrewMaddocks">
            <i class="fab fa-github"></i>{" "}
          </a>
          <a href="https://www.instagram.com/maddandrew/">
            <i class="fab fa-instagram"></i>{" "}
          </a>
        </div>
        <p>
          ANDREW MADDOCKS <span>©2020</span>
        </p>
      </div>
    </div>
  );
}
export default Footer;
