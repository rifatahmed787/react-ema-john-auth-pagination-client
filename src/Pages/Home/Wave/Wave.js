import React from "react";
import "../Wave/Wave.css";

const Wave = () => {
  return (
    <div>
      <div className="wave-anim">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
      </div>
    </div>
  );
};

export default Wave;
