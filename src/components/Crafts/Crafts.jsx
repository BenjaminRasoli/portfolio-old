import React, { useEffect } from "react";
import { myCrafts } from "./myCrafts";
import "./Crafts.css";
import Aos from "aos";

function Crafts() {
  useEffect(() => {
    Aos.init({
      startEvent: "load",
    });
  });
  return (
    <div id="craftcontainerid" className="craftcontainer">
      {myCrafts.map((craft, i) => {
        return (
          <div
            key={i}
            data-aos="fade-right"
            data-aos-duration="1000"
            className="craftimages"
          >
            <div
              className="imagecontainer"
              style={{ backgroundImage: `url(${craft.image} )` }}
            >
              <a
                target="_blank"
                href={craft.link}
                className="imagebutton"
                rel="noreferrer"
              >
                <div className="imageButtonText">
                  View <br /> Project
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Crafts;
