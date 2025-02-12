import React from "react";
import "./skill.scss";
import "../info/Landing";

export default function Feature(props) {
  return (
    <>
      <p
        className="w-full text-base font-mono capitalize"
        data-value={props.dataval}
      >
        {props.name}
      </p>
      <progress max="100" value={props.value} className="html5">
        <div className="progress-bar">
          <span className="w-full">100%</span>
        </div>
      </progress>
    </>
  );
}
