import React from "react";

import PrimaryText from "../UI/PrimaryText";

import user1 from "../../assets/img/img17.png";
import user2 from "../../assets/img/img18.png";
import user3 from "../../assets/img/img19.png";
import classes from "./Voice.module.css";

const Voice = (props) => {
  return (
    <section className={classes["voice-section"]}>
      <div className="content">
        <div className={classes["voice-heading"]}>
          <PrimaryText>USER VOICE</PrimaryText>
        </div>
        <div className={classes["voice-title"]}>
          <p>ユーザーの声</p>
        </div>
        <div className={classes["voice-users"]}>
          <ul>
            <li className={classes["user-l"]}>
              <div className={classes["img-border"]}>
                <img src={user1} alt="img" />
              </div>
              <div className={classes["user-text"]}>
                <h2>20代 フリーランスビデオグラファー</h2>
                <p>
                  企画から撮影現場までを学べる機会は他にないと思います。独学でフリーランスだと、自分の作品に講評もらう機会がないのでプロ視点で正しくアドバイスもらえる作品添削は、とても貴重な機会だと思っております。ネットのチュートリアルで学べない、AOIさんだからこそ出来る学びの場を体現されていて、そのコミュニティに参加させてもらえることに幸せを感じています。
                </p>
              </div>
            </li>
            <li className={classes["user-r"]}>
              <div className={classes["img-border"]}>
                <img src={user2} alt="img" />
              </div>
              <div className={classes["user-text"]}>
                <h2>20代 学生</h2>
                <p>
                  映像制作の経験も知識もゼロで入会しました。コミュニティを通して学生や社員さんと繋がれたり、最前で活躍しているクリエイターの方の話を聞けて勉強になります。CM撮影の現場体験では、実際にPM業務を体感することができるので、職種理解が深まりました！
                </p>
              </div>
            </li>
            <li className={classes["user-l"]}>
              <div className={classes["img-border"]}>
                <img src={user3} alt="img" />
              </div>
              <div className={classes["user-text"]}>
                <h2>20代 学生</h2>
                <p>
                  学生でもスキルを習得すれば、AOI
                  Pro.からお仕事をもらえる機会がありました。学生のうちから業界人との繋がりができるのも魅力の一つです！CM撮影の現場体験をいかして
                  AOI Pro. に内定しました！
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Voice;
