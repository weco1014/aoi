import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { makeStyles } from "@mui/material/styles";

import PrimaryText from "../UI/PrimaryText";
import classes from "./Faq.module.css";

const Faq = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // const useStyles = makeStyles({
  //   root: {
  //     display: "flex",
  //     alignItems: "center",
  //     backgroundColor: "#EBECF0",
  //     marginTop: "1rem",
  //   },
  // });

  return (
    <section className={classes["faq-section"]}>
      <div className="content">
        <div className={classes["faq-heading"]}>
          <PrimaryText>FAQ</PrimaryText>
        </div>
        <div className={classes["faq-title"]}>
          <p>よくある質問</p>
        </div>
        <div className={classes["faq-container"]}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#EBECF0",
                marginTop: "1rem",
              }}
            >
              <Typography
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#0068B7",
                  flexShrink: 0,
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Q
              </Typography>
              <Typography sx={{ color: "text.primary", marginLeft: "1rem" }}>
                未経験者でも大丈夫ですか？
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                未経験者も大歓迎です。初級者向けのチュートリアルも展開していくので基礎知識も学べます。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#EBECF0",
                marginTop: "1rem",
              }}
            >
              <Typography
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#0068B7",
                  flexShrink: 0,
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Q
              </Typography>
              <Typography sx={{ color: "text.primary", marginLeft: "1rem" }}>
                地方からでも参加できますか？
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                セミナーはオンライン配信もしますので、ご参加頂けます。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#EBECF0",
                marginTop: "1rem",
              }}
            >
              <Typography
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#0068B7",
                  flexShrink: 0,
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Q
              </Typography>
              <Typography sx={{ color: "text.primary", marginLeft: "1rem" }}>
                映画やドラマ志望ですが、受講対象に入っていますか？
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                セミナーでは広告映像を中心に学びますが、映画監督などがゲスト講師を務めるトークイベントもございます。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#EBECF0",
                marginTop: "1rem",
              }}
            >
              <Typography
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#0068B7",
                  flexShrink: 0,
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Q
              </Typography>
              <Typography sx={{ color: "text.primary", marginLeft: "1rem" }}>
                セミナーの実施形式を教えてください。
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                主にはZoom（オンライン）を想定しておりますが、感染症の状況を鑑みてリアル開催（配信付き）する場合もございます。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#EBECF0",
                marginTop: "1rem",
              }}
            >
              <Typography
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#0068B7",
                  flexShrink: 0,
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Q
              </Typography>
              <Typography sx={{ color: "text.primary", marginLeft: "1rem" }}>
                セミナーの開催頻度はどのくらいですか？
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                月に3回程開催しています。（Master
                Classの場合）セミナー以外にも、イベントなどを実施しております。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#EBECF0",
                marginTop: "1rem",
              }}
            >
              <Typography
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#0068B7",
                  flexShrink: 0,
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Q
              </Typography>
              <Typography sx={{ color: "text.primary", marginLeft: "1rem" }}>
                入会のタイミングはありますか？
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                どのタイミングでもご参加頂けます。
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
