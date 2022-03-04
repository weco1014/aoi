import React from "react";

import HeroBtn from "./HeroBtn";
import HeroPrize from "./HeroPrize";
import Card from "../UI/Card";
import Mgn from "../UI/Mgn";
import PrimaryText from "../UI/PrimaryText";

import logo from "../../assets/img/img29.png";

import classes from "./Hero.module.css";

const Hero = (props) => {
  return (
    <header className={classes.hero}>
      <p className={classes["hero-logo"]}>
        <img src={logo} alt="logo" />
      </p>
      <div className={classes["hero-card"]}>
        <Card>
          <p className={classes["hero-heading"]}>
            映像制作を現場のプロから学ぶ
            <br className="only-sp" />
            スクール型コミュニティ
          </p>
          <h1 className={classes["hero-title"]}>
            <span className={classes["dot-text"]}>未経験</span>からでも
            <br />
            映像制作を
            <PrimaryText>企画</PrimaryText>
            から学び、
            <br className="only-sp" />
            <PrimaryText>実践</PrimaryText>
            に生かす。
          </h1>
          <HeroPrize></HeroPrize>
          <Mgn />
          <HeroBtn link="#">トライアルクーポンはこちら</HeroBtn>
        </Card>
      </div>
    </header>
  );
};

export default Hero;
