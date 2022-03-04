import React from "react";

import PrimaryText from "../UI/PrimaryText";
import creator01 from "../../assets/img/img11.png";
import creator02 from "../../assets/img/img12.png";
import creator03 from "../../assets/img/img13.png";
import creator04 from "../../assets/img/img14.png";
import creator05 from "../../assets/img/img15.png";
import creator06 from "../../assets/img/img16.png";
import CtaButton from "../UI/CtaButton";

import classes from "./Instructor.module.css";

const Instructor = (props) => {
  const creators = [
    {
      img: creator01,
      nameJp: "永井 聡",
      nameEn: "NAGAI AKIRA",
      role: "映画監督",
    },
    {
      img: creator04,
      nameJp: "児玉 裕一",
      nameEn: "KODAMA YUICHI",
      role: "映像作家",
    },
    {
      img: creator05,
      nameJp: "是枝 裕和",
      nameEn: "KOREEDA HIROKAZU",
      role: "映画監督",
    },
    {
      img: creator03,
      nameJp: "西川 美和",
      nameEn: "NISHIKAWA MIWA",
      role: "映画監督",
    },
    {
      img: creator02,
      nameJp: "川村 元気",
      nameEn: "KAWAMURA GENKI",
      role: "映画プロデューサー",
    },
    {
      img: creator06,
      nameJp: "林 響太朗",
      nameEn: "HAYASHI KYOTARO",
      role: "映像作家",
    },
  ];
  const creator = creators.map((creator, index) => {
    return (
      <li key={index} className={classes["creators-list-item"]}>
        <img src={creator.img} alt={index} />
        <h2 className={classes["creator-name"]}>{creator.nameJp}</h2>
        <p className={classes["creator-sub"]}>{creator.nameEn}</p>
        <p className={classes["creator-role"]}>{creator.role}</p>
      </li>
    );
  });

  return (
    <section className={classes["creator-section"]}>
      <div className="content">
        <h1 className={classes["creators-title"]}>
          講師は
          <br className="only-sp" />
          <PrimaryText>一流クリエイター</PrimaryText>揃い!
        </h1>
        <ul className={classes["creators-list"]}>{creator}</ul>
        <p className={classes["btn-more"]}>and more …</p>
        <div className={classes["btn-cta"]}>
          <CtaButton link="#">えらべる3つのプラン詳しくはこちら</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
