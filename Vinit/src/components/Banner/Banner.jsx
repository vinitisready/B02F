import React from "react";
import "../Banner/Banner.css";

const Banner = () => {
  return (
    <div className="main-banner">
      <div className="banner-content">
        <p id="b-p-1">IELTS Preparation</p>
        <p id="b-p-2">Online Best Learning</p>
        <p id="b-p-3">Opportunities in The World</p>
        <p id="b-p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax
          negotium, dicere impudens, nisi hoc institu translum ad philosophos
          nostros esset.
        </p>
        <button className="enroll-button">Enroll Now</button>
      </div>
      <div className="banner-image">
        <div id="b-img-1">
          <img src="globe.png" alt="globe" />
        </div>
        <div id="b-img-2">
          <img
            src="young women working with computer.png "
            alt="young women working with computer"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;