import React from "react";

import classes from "./Probrem.module.css";
import Card from "../UI/Card";
import PrimaryText from "../UI/PrimaryText";

import logoBlue from "../../assets/img/img10.png";

const Probrem = (props) => {
  return (
    <section className={classes.probrem}>
      <div className="content">
        <p className={classes["probrem-heading"]}>
          映像業界で働いてみたいけど
          <br className="onpy-sp" />
          何から初めていいかわからない…
        </p>
        <h1 className={classes["probrem-title"]}>こんなお悩みありませんか？</h1>
        <div className={classes["probrem-cards"]}>
          <Card>
            独学で<PrimaryText>専門知識</PrimaryText>を<br />
            身につけられるか不安
          </Card>
          <Card>
            もっと
            <PrimaryText>
              実践的な
              <br />
              スキル
            </PrimaryText>
            を学びたい
          </Card>
          <Card>
            <PrimaryText>就職活動</PrimaryText>に<br />
            活かしたい
          </Card>
        </div>
        <div className={classes["probrem-allow"]} />
        <div className={`${classes["probrem-sugest"]} ${"only-pc"}`}>
          <Card>
            そんなあなたは
            <br />
            <div className={classes["probrem-suggest-strong"]}>
              <p className={classes.logo}>
                <img src={logoBlue} alt="logo" />
              </p>
              <p>に</p>
            </div>
            ご参加ください！
          </Card>
        </div>
        <div className={`${classes["probrem-sugest"]} ${"only-sp"}`}>
          <Card>
            そんなあなたは
            <br />
            <span>AOI Film Craft Lab.</span>に<br />
            ご参加ください！
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Probrem;
