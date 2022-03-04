import React from "react";

import img0 from "../../assets/img/img0.png";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img30.png";
import img4 from "../../assets/img/img31.png";
import img5 from "../../assets/img/img32.png";

// import imgSp0

import classes from "./HeroPrize.module.css";

const HeroPrize = (props) => {
  const pcImages = [img0, img1, img2];
  const pcPrizes = pcImages.map((image, index) => (
    <li key={index} className={`${classes["prize-item"]} ${"only-pc"}`}>
      <img src={image} alt={index} />
    </li>
  ));

  return (
    <ul className={classes.prizes}>
      {pcPrizes}
      <li
        className={`${classes["prize-item"]} ${"only-sp"} ${
          classes["prize-item--big"]
        }`}
      >
        <img src={img3} alt="prize" />
      </li>
      <li className={`${classes["prize-item"]} ${"only-sp"}`}>
        <img src={img4} alt="prize" />
      </li>
      <li className={`${classes["prize-item"]} ${"only-sp"}`}>
        <img src={img5} alt="prize" />
      </li>
    </ul>
  );
};

export default HeroPrize;
