import React from "react";

import img1 from "../../assets/img/img26.png";
import img2 from "../../assets/img/img27.png";
import img3 from "../../assets/img/img28.png";

import PrimaryText from "../UI/PrimaryText";

import classes from "./Features.module.css";

const Features = (props) => {
  return (
    <section>
      <div className="content">
        <ul className={classes["features-list"]}>
          <li>
            <div className={`${classes["list-item"]} ${classes.right}`}>
              <div className={classes["list-item--body"]}>
                <h2>
                  プロの<PrimaryText>撮影現場体験</PrimaryText>
                </h2>
                <span className={classes.deco}>01</span>
                <p>
                  メンバー限定で、AOIPro.だからこそ提供できる<span>CM、MV</span>
                  などの<span>撮影現場体験の機会</span>
                  が用意されています。実際に社員や技術スタッフの働きぶりを間近で見ることができるので業界研究にも繋がります。
                </p>
              </div>
              <div className={classes["list-item--img"]}>
                <img src={img2} alt="img" />
              </div>
            </div>
          </li>
          <li>
            <div className={`${classes["list-item"]} ${classes.left}`}>
              <div className={classes["list-item--body"]}>
                <h2>
                  <PrimaryText>オンライン</PrimaryText>コミュニティ
                </h2>
                <span className={classes.deco}>02</span>
                <p>
                  <span>メンバー限定</span>
                  のオンライントークルームに参加でき、わからないことを講師やメンバーに質問したり、気軽に情報交換ができます。AOI
                  Pro.のプロデューサーも参加しているので、<span>現場体験</span>
                  や、<span>業務アシスタント</span>のアルバイト、
                  <span>お仕事の紹介</span>
                  などを募集することもあります。セミナー以外にも、映像を学ぶコンテンツや、繋がりが広がる交流の場があります。
                </p>
              </div>
              <div className={classes["list-item--img"]}>
                <img src={img3} alt="img" />
              </div>
            </div>
          </li>
          <li>
            <div className={`${classes["list-item"]} ${classes.right}`}>
              <div className={classes["list-item--body"]}>
                <h2>
                  <PrimaryText>トップクリエイター</PrimaryText>によるセミナー
                </h2>
                <span className={classes.deco}>03</span>
                <p>
                  映画監督や広告クリエイター、ミュージックビデオを手掛ける
                  <span>
                    日本を代表する一流クリエイターをゲストに招いたトークイベント
                  </span>
                  を実施しております。手掛けた作品のアイデアや手法はどこから湧いてくるのか、現場で培われた経験と知見を伝授し、
                  <span>発想方法や哲学</span>を学べます。
                </p>
              </div>
              <div className={classes["list-item--img"]}>
                <img src={img1} alt="img" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
