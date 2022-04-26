import React from "react";

import classes from "./Probrem.module.css";
import Card from "../UI/Card";
import PrimaryText from "../UI/PrimaryText";

const Probrem = (props) => {
  return (
    <section className={classes.probrem}>
      <div className="content">
        <p className={classes["probrem-heading"]}>
          映像業界に転職や映像の副業を始めたいけど
          <br className="only-sp" />
          何から始めていいかわからない…
        </p>
        <h1 className={classes["probrem-title"]}>こんなお悩みありませんか？</h1>
        <div className={classes["probrem-cards"]}>
          <Card>
            独学で<PrimaryText>専門知識</PrimaryText>を<br />
            身につけられるか不安
          </Card>
          <Card>
            現場体験込みの
            <PrimaryText>実践的スキル</PrimaryText>
            を学びたい
          </Card>
          <Card>
            周りに
            <PrimaryText>映像コミュニティー</PrimaryText>
            が少ない
          </Card>
        </div>
        <div className={classes["probrem-allow"]} />
        <div className={`${classes["probrem-sugest"]} ${"only-pc"}`}>
          <Card>
            そんなあなたは
            <br />
            <div className={classes["probrem-suggest-strong"]}>
              <p className={classes.logo}>
                <img
                  src="https://image.osiro.it/pass/image_uploads/454900/images/original/img10.03558f97e59b27865155.png?1647928396"
                  alt="logo"
                />
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
