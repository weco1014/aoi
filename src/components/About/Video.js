import React from "react";

import video from "../../assets/img/video1.mp4";
import classes from "./Video.module.css";

const Video = (props) => {
  return (
    <div className={classes.video}>
      {/* <video width="650" height="400" autoPlay muted>
        <source src={video} type="video/mp4" />
        <p>動画を使用できるブラウザで閲覧して下さい。</p>
  </video> */}
      <iframe
        src="https://player.vimeo.com/video/524934301?h=e452a4ae79&color=0a67b4&title=0&byline=0"
        width="650"
        height="400"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
