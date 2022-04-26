import React from "react";

import PrimaryText from "../UI/PrimaryText";
import classes from "./Plan.module.css";

const Plan = (props) => {
  return (
    <section className={classes["plan-section"]} id="plan">
      <div className={classes["plan-heading"]}>
        <PrimaryText>PRICE</PrimaryText>
      </div>
      <div className={classes["plan-title"]}>
        <p>えらべる3つのプラン</p>
      </div>
      <ul className={classes["plan-cards"]}>
        <li className={classes["plan-item"]}>
          <p className={`${classes["plan-item--label"]} ${classes.master}`}>
            Master Class
          </p>
          <div className={classes["plan-item--body"]}>
            <div className={classes["plan-item--heading"]}>
              <h2 className={classes["plan-item--price"]}>
                ¥<span>10,000</span>/月
              </h2>
              <h3 className={classes["plan-item--title"]}>
                広告映像を学びたい方
              </h3>
              <p className={classes["plan-item--text"]}>
                初中級者からフリーランスの方まで、広告映像制作の実務スキルを学ぶ講座を受講できます。現場経験、企画ワーク、作品添削など！
              </p>
            </div>
            <div className={classes["plan-item--detail"]}>
              <ul className={classes["plan-item--benefit"]}>
                <li>全セミナーへの参加（アーカイブ全視聴）</li>
                <li>動画教材の視聴</li>
                <li>質問し放題かつ24時間以内のチャットサポート</li>
                <li>作品講評会への参加</li>
                <li>案件紹介の可能性（審査有り）</li>
                <li>コミュニティスペースのご利用（AOI Pro. JUKU / 原宿）</li>
              </ul>
              <button>
                <a href="https://fcl.aoi-pro.com/pre_auth/email/new?plan_id=134">
                  詳しく見る
                </a>
              </button>
            </div>
          </div>
        </li>
        <li className={classes["plan-item"]}>
          <p className={`${classes["plan-item--label"]} ${classes.student}`}>
            Student Class（学割）
          </p>
          <div className={classes["plan-item--body"]}>
            <div className={classes["plan-item--heading"]}>
              <h2 className={classes["plan-item--price"]}>
                ¥<span>1,980</span>/月
              </h2>
              <h3 className={classes["plan-item--title"]}>
                映像業界に興味がある学生の方
              </h3>
              <p className={classes["plan-item--text"]}>
                撮影現場を経験できる機会や、AOI
                Pro.スタッフやメンバーと交流できる場があります。
                映像制作を学べるセミナーを受講できます。
              </p>
            </div>
            <div className={classes["plan-item--detail"]}>
              <ul className={classes["plan-item--benefit"]}>
                <li>現場体験への参加（PM体験）</li>
                <li>質問し放題かつ24時間以内のチャットサポート</li>
                <li>全セミナーへの参加（アーカイブ全視聴）</li>
                <li>案件やアルバイト紹介の可能性（審査有り）</li>
                <li>コミュニティスペースのご利用（AOI Pro. JUKU / 原宿）</li>
                <li>作品講評会への参加</li>
                <li>交流会への参加</li>
                <li>動画教材の視聴</li>
              </ul>
              <button>
                <a href="https://fcl.aoi-pro.com/pre_auth/email/new?plan_id=280">
                  詳しく見る
                </a>
              </button>
            </div>
          </div>
        </li>
        <li className={classes["plan-item"]}>
          <p className={`${classes["plan-item--label"]} ${classes.light}`}>
            Light Class
          </p>
          <div className={classes["plan-item--body"]}>
            <div className={classes["plan-item--heading"]}>
              <h2 className={classes["plan-item--price"]}>
                ¥<span>3,000</span>/月
              </h2>
              <h3 className={classes["plan-item--title"]}>
                映像業界に興味がある方
              </h3>
              <p className={classes["plan-item--text"]}>
                コミュニティ参加がメインとなるプランです。
                ビジョンセミナーやサロンイベントに参加できます。映像業界を気軽に勉強したい方はこちら
              </p>
            </div>
            <div className={classes["plan-item--detail"]}>
              <ul className={classes["plan-item--benefit"]}>
                <li>コミュニティへの参加</li>
                <li>セミナーへの限定参加</li>
              </ul>
              <button>
                <a href="https://fcl.aoi-pro.com/pre_auth/email/new?plan_id=135">
                  詳しく見る
                </a>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Plan;
