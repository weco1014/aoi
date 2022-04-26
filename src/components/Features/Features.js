import React from "react";

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
                  メンバー限定で、AOI Pro.だからこそ提供できる
                  <span>CM、MV</span>
                  などの<span>撮影現場体験の機会</span>
                  が用意されています。実際に社員や技術スタッフの動きを間近で見ることができるのでより実践的なノウハウを身につけれます。
                </p>
              </div>
              <div className={classes["list-item--img"]}>
                <img
                  src="https://image.osiro.it/pass/image_uploads/454920/images/original/img27.770249533f7880ae454b.png?1647928584"
                  alt="img"
                />
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
                  や<span>業務アシスタント</span>の アルバイトの募集のほか、
                  <span>お仕事を紹介</span>
                  することもあります。
                </p>
              </div>
              <div className={classes["list-item--img"]}>
                <img
                  src="https://image.osiro.it/pass/image_uploads/454921/images/original/img28.fcd393b97fb8ab46a094.png?1647928596"
                  alt="img"
                />
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
                <img
                  src="https://image.osiro.it/pass/image_uploads/454919/images/original/img26.877bbb0a8fea3b243f88.png?1647928573"
                  alt="img"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
