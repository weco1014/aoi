import React from "react";

import PrimaryText from "../UI/PrimaryText";

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
                <img
                  src="https://image.osiro.it/pass/image_uploads/454909/images/original/img17.b8b6ce2d381d987bedac.png?1647928475"
                  alt="img"
                />
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
                <img
                  src="https://image.osiro.it/pass/image_uploads/454910/images/original/img18.b71339496134eef2e163.png?1647928487"
                  alt="img"
                />
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
                <img
                  src="https://image.osiro.it/pass/image_uploads/454911/images/original/img19.388ae030a51a29c4b5e7.png?1647928496"
                  alt="img"
                />
              </div>
              <div className={classes["user-text"]}>
                <h2>20代 社会人</h2>
                <p>
                  映像業界への転職を考えていましたが、実際の現場体験をしながら体型的に学べるスクールは多くないのでアオイラボを選びました！半年程で案件も受けられるようになり成長を感じてます！
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
