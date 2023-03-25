import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const navcontainer =
    scrollPosition > 100 ? "navcontainer scrolled" : "navcontainer";

  return (
    <div className={navcontainer}>
      <ul>
        <div className="mainnav">
          <li>
            <a href="#craftcontainerid">Work</a>
          </li>
          <li>
            <a href="#aboutcontainerid">About</a>
          </li>
          <li>
            <a href="#contacttextid">Contact</a>
          </li>
        </div>

        <div className="socialmedia">
          <li>
            <a target="_blank" href="https://www.instagram.com/">
              <FaInstagram className="instagram" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/">
              <FaGithub className="github" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://sv-se.facebook.com/">
              <FaFacebook className="facebook" />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
