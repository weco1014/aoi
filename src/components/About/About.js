import React from "react";

import PrimaryText from "../UI/PrimaryText";
import Video from "./Video";

import classes from "./About.module.css";
import logoBl from "../../assets/img/img9.png";

const About = (props) => {
  return (
    <section className={classes["about-section"]}>
      <div className="content">
        <div className={classes["about-heading"]}>
          <PrimaryText>WHO WE ARE</PrimaryText>
        </div>
        {/* <div className={`${classes["about-title"]} ${"only-pc"}`}>
          <p className={classes["about-title-logo"]}>
            <img src={logoBl} alt="logo" />
          </p>
          <p>とは？</p>
        </div> */}
        <div className={`${classes["about-title"]}`}>
          <span>AOI Film Craft Lab.</span>とは？
        </div>
        <ul className={classes["about-lists"]}>
          <li>
            <div>
              <p className={classes["about-list-title"]}>
                アオイラボ独自の
                <br />
                映像案件
              </p>
              <p className={classes["about-list-data"]}>
                50<span>件</span>
              </p>
              <p className={classes["about-list-title"]}>以上</p>
            </div>
          </li>
          <li>
            <div>
              <p className={classes["about-list-title"]}>これまで</p>
              <p className={classes["about-list-data"]}>
                1000<span>名</span>
              </p>
              <p className={classes["about-list-title"]}>以上参加！</p>
            </div>
          </li>
          <li>
            <div>
              <p className={classes["about-list-title"]}>AOI Pro.の現場体験</p>
              <p className={classes["about-list-data"]}>
                100<span>件</span>
              </p>
              <p className={classes["about-list-title"]}>以上</p>
            </div>
          </li>
        </ul>
        <div className={classes["about-text"]}>
          <p>
            2020年8月にスタートした、現場のプロから映像制作を学ぶスクール型コミュニティです。
            <br className="only-pc" />
            最前線で活躍するクリエイターを講師に迎えたセミナーやワークショップを中心に、
            <br className="only-pc" />
            「CM撮影現場の体験」や出会いやきっかけを作るコミュニティを提供しています。
          </p>
        </div>
        <Video />
      </div>
    </section>
  );
};

export default About;
