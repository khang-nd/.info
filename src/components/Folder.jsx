import React from "react";
import "./Folder.scss";

function Folder({ icon, active }) {
  return (
    <div className="folder">
      <div className="folder__back">
        <svg viewBox="0 0 20 16">
          <path d="M7.5,0C7.4,0,2,0,2,0C0.9,0,0,0.9,0,2l0,12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2c0,0-7.5,0-8,0C9,2,9.9,0,7.5,0z" />
        </svg>
      </div>
      <div className="folder__file">
        <svg viewBox="0 0 20 16">
          <path d="m2.69911,2.88495l14.51329,0c0.99779,0 1.81416,0.80329 1.81416,1.78508l0,8.92542c0,0.9818 -0.81637,1.78508 -1.81416,1.78508l-14.51329,0c-0.99779,0 -1.81416,-0.80329 -1.81416,-1.78508l0,-8.92542c0,-0.9818 0.81637,-1.78508 1.81416,-1.78508z" />
        </svg>
      </div>
      <div className="folder__front">
        <svg viewBox="0 0 20 16">
          <path d="M2,2h16c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V4C0,2.9,0.9,2,2,2z"></path>
        </svg>
        <img src={icon} alt="" />
      </div>
    </div>
  );
}

export default Folder;
