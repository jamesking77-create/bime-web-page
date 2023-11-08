import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="box1"></div>
      <div className="box2">
        <br />
        <br /><br />
        <h1 className="discover">
          Discover a world of <br /> absolute control
        </h1>
        <p className="discover-ex">
          Dive into an experience that sets us apart <br />
          in an ever-evolving cross browser extension. <br />
          offer you the best web domain control, <br />
          we redefine possibilities.
        </p>
      </div>
      <div className="box3">
      <h1 className="discover">
        <span style={{color: '#07C189'}}>Avoid </span>
        distractions, increase your web surfing
        productivity.
        </h1>
        <p className="discover-ex">
          Dive into an experience that sets us apart <br />
          in an ever-evolving cross browser extension. <br />
          offer you the best web domain control, <br />
          we redefine possibilities.
        </p>
      </div>
      <div className="box4">

      </div>
    </div>
  );
};

export default Hero;
