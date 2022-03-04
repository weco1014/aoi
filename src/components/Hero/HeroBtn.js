import React from "react";

import classes from "./HeroBtn.module.css";

const HeroBtn = (props) => {
  return (
    <button className={classes["hero-btn"]}>
      <span>
        10日間
        <br />
        無料
      </span>
      <a href={props.link}>{props.children}</a>
    </button>
  );
};

export default HeroBtn;
