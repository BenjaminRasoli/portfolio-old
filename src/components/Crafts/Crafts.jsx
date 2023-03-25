import React from "react";
import { myCrafts } from "./myCrafts";
import "./Crafts.css";

function Crafts() {
  return (
    <div id="craftcontainerid" className="craftcontainer">
      {myCrafts.map((craft) => {
        return (
          <>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="craftimages"
            >
              <div
                className="imagecontainer"
                style={{ backgroundImage: `url(${craft.image} )` }}
              >
                <a href={craft.link} className="imagebutton">
                  View <br /> Project
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Crafts;
