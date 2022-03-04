import React from "react";

import classes from "./PrimaryText.module.css";

const PrimaryText = (props) => {
  return <span className={classes.primary}>{props.children}</span>;
};

export default PrimaryText;
