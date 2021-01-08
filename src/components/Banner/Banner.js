import React from "react";
import "./Banner.scss";

function Banner({ text }) {
  return (
    <div className="banner" data-test="component-Banner">
      {text}
    </div>
  );
}

export default Banner;
