import React from "react";

import PrimaryText from "../UI/PrimaryText";

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
            <img
              src="https://image.osiro.it/pass/image_uploads/459813/images/original/AOIPro_logo.png?1648537088"
              alt="logo"
            />
          </h2>
          <p className={classes["company-info-text"]}>
            AOI
            Pro.は、広告映像制作をコアビジネスとするアジアトップクラスの映像プロダクションです。
            映像制作に必要なリソースをグループ内に完備し、
            海外事業、インフルエンサーマーケティングなども行っています。
          </p>
          <ul className={classes["company-cards"]}>
            <li>
              <div className={classes.icon}>
                <img
                  src="https://image.osiro.it/pass/image_uploads/454916/images/original/img22.6f8633d48f48b2fa86ed.png?1647928539"
                  alt="img"
                />
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
                <img
                  src="https://image.osiro.it/pass/image_uploads/454917/images/original/img23.8ec4b0556606b8833694.png?1647928557"
                  alt="img"
                />
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
                <img
                  src="https://image.osiro.it/pass/image_uploads/454918/images/original/img24.0662beb41a4377a36184.png?1647928565"
                  alt="img"
                />
              </div>
              <div className={classes.right}>
                <h3>海外展開</h3>
                <div className={classes["company-data"]}>
                  <p>アジア</p>
                  <p className={classes.strong}>
                    3<span>都市</span>
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
