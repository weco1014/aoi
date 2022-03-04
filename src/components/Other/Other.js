import React from "react";
import classes from "./Other.module.css";

const Other = (props) => {
  return (
    <section className={classes["other-section"]}>
      <div className="content">
        <h1 className={classes["other-title"]}>注意事項</h1>
        <ul className={classes["other-texts"]}>
          <li>
            ※入会時にクレジットカード（VISA,MasterCard）での月額払いになります。
          </li>
          <li>※クレジットカード決済が確認されると参加メンバーとなります。</li>
          <li>
            ※コミュニティ内の投稿や講義内容はメンバーのみの限定公開を前提にしております。
            <br />
            よって、コンテンツの無断転用や許可なしでの公開はお控えください。
          </li>
          <li>
            ※また他メンバーへの迷惑行為や情報商材または勧誘目的と判断される方の入会はお断りします。
            <br />
            確認された場合は警告や強制退会の措置を取らせて頂くことがあります。
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Other;
