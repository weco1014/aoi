import React from "react";
import classes from "./CtaButton.module.css";

const CtaButton = (props) => {
  return (
    <div className={classes.btn}>
      <p>
        <a href={props.link}>{props.children}</a>
      </p>
    </div>
  );
};

export default CtaButton;
