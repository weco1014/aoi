import React from "react";

import PrimaryText from "../UI/PrimaryText";

import logo from "../../assets/img/img21.png";
import img1 from "../../assets/img/img22.png";
import img2 from "../../assets/img/img23.png";
import img3 from "../../assets/img/img24.png";

import classes from "./Company.module.css";

const Company = (props) => {
  return (
    <section className={classes["company-section"]}>
      <div className={classes["company-container"]}>
        <div className={classes["company-heading"]}>
          <PrimaryText>COMPANY</PrimaryText>
        </div>
        <div className={classes["company-title"]}>
          <p>
            運営会社<span>AOI Pro.</span>とは？
          </p>
        </div>
        <div className={classes["company-info"]}>
          <h2>
            <img src={logo} alt="logo" />
          </h2>
          <p className={classes["company-info-text"]}>
            AOIPro.は、広告映像制作をコアビジネスとするアジアトップクラスの映像プロダクションです。
            映像制作に必要なリソースをグループ内に完備し、
            海外事業、インフルエンサーマーケティングなども行っています。
          </p>
          <ul className={classes["company-cards"]}>
            <li>
              <div className={classes.icon}>
                <img src={img1} alt="img" />
              </div>
              <div className={classes.right}>
                <h3>広告映像制作本数</h3>
                <div className={classes["company-data"]}>
                  <p>年間約</p>
                  <p className={classes.strong}>
                    1000<span>本</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.icon}>
                <img src={img2} alt="img" />
              </div>
              <div className={classes.right}>
                <h3>受賞数</h3>
                <div className={classes["company-data"]}>
                  <p>年間</p>
                  <p className={classes.strong}>
                    100<span>以上</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.icon}>
                <img src={img3} alt="img" />
              </div>
              <div className={classes.right}>
                <h3>海外展開</h3>
                <div className={classes["company-data"]}>
                  <p>アジア</p>
                  <p className={classes.strong}>
                    5<span>都市</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Company;
