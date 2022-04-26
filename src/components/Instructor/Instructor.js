import React from "react";

import PrimaryText from "../UI/PrimaryText";
import CtaButton from "../UI/CtaButton";

import classes from "./Instructor.module.css";

const Instructor = (props) => {
  const creators = [
    {
      img: "https://image.osiro.it/pass/image_uploads/454901/images/original/img11.c75bfa3cc867b515698d.png?1647928409",
      nameJp: "永井 聡",
      nameEn: "NAGAI AKIRA",
      role: "映画監督",
    },
    {
      img: "https://image.osiro.it/pass/image_uploads/454904/images/original/img14.1d44cc1dbb2d6f14ffa0.png?1647928439",
      nameJp: "児玉 裕一",
      nameEn: "KODAMA YUICHI",
      role: "映像作家",
    },
    {
      img: "https://image.osiro.it/pass/image_uploads/454905/images/original/img15.72c92f4cb2ca6b8bc16e.png?1647928450",
      nameJp: "是枝 裕和",
      nameEn: "KOREEDA HIROKAZU",
      role: "映画監督",
    },
    {
      img: "https://image.osiro.it/pass/image_uploads/454903/images/original/img13.667783e57ac8d8277464.png?1647928426",
      nameJp: "西川 美和",
      nameEn: "NISHIKAWA MIWA",
      role: "映画監督",
    },
    {
      img: "https://image.osiro.it/pass/image_uploads/454902/images/original/img12.b944e06d649df01cbb6e.png?1647928418",
      nameJp: "川村 元気",
      nameEn: "KAWAMURA GENKI",
      role: "映画プロデューサー",
    },
    {
      img: "https://image.osiro.it/pass/image_uploads/454908/images/original/img16.9a501a09307844359454.png?1647928465",
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
          <CtaButton link="#plan">えらべる3つのプラン詳しくはこちら</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
