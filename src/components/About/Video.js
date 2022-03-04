import React from "react";

import video from "../../assets/img/video1.mp4";
import classes from "./Video.module.css";

const Video = (props) => {
  return (
    <div className={classes.video}>
      <video width="650" height="400" autoPlay muted>
        <source src={video} type="video/mp4" />
        <p>動画を使用できるブラウザで閲覧して下さい。</p>
      </video>
    </div>
  );
};

export default Video;
