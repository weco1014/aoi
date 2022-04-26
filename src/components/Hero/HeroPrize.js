import React from "react";

// import imgSp0

import classes from "./HeroPrize.module.css";

const HeroPrize = (props) => {
  const pcImages = [
    "https://image.osiro.it/pass/image_uploads/467309/images/original/img31.png?1649396699",
    "https://image.osiro.it/pass/image_uploads/467310/images/original/img32.png?1649396711",
    "https://image.osiro.it/pass/image_uploads/467311/images/original/img33.png?1649396720",
  ];
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
        <img
          src="https://image.osiro.it/pass/image_uploads/467312/images/original/img34.png?1649396730"
          alt="prize"
        />
      </li>
      <li className={`${classes["prize-item"]} ${"only-sp"}`}>
        <img
          src="https://image.osiro.it/pass/image_uploads/467313/images/original/img35.png?1649396743"
          alt="prize"
        />
      </li>
      <li className={`${classes["prize-item"]} ${"only-sp"}`}>
        <img
          src="https://image.osiro.it/pass/image_uploads/467314/images/original/img36.png?1649396750"
          alt="prize"
        />
      </li>
    </ul>
  );
};

export default HeroPrize;
