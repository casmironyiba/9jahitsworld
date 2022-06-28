import React, { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import { mediaQueries } from "../fp/MediaQueries";
import remsize from "../fp/Remsize";
import LPHeading from "../components/LpHeading";
import LPHints from "../components/LpHints";
import LPVideo from "../components/LpVideo";
import RecentUpdate from "../components/RecentUpdate";
import displayGrid from "../fp/DisplayGrid";
import PageAds from "../components/PageAds";

const theme = {
  $light: "#eeeeee",
  $white: "white",
};

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
  ${boxProperty("100%", remsize(1200), "auto", remsize(10))};
  opacity:1;

  `)};
`;
const Div = styled.div`
  ${mediaQueries(`mobileS`)(`
  ${boxProperty("100%", "100%", " auto", "", theme.$white)};
  border:1px solid white;
  ${displayFlex(`space-between`, "center", `column nowrap`)};
  box-shadow:5px 5px 5px;

  &>div#homeArticleVideoHints {
    ${boxProperty(`100%`, "", ` auto`, remsize(20))};
    ${displayGrid(`300px / repeat(1,5fr)`, "", remsize(2))};
  };
  &>div#recentUpdate { display:none};
  `)};

  ${mediaQueries(`mobileL`)(`
  &>div#homeArticleVideoHints {
    height:400px;
    ${displayGrid(`405px / repeat(2,5fr)`, "", remsize(2))};
  }
    `)};

  ${mediaQueries(`tablet`)(`
    width:75%;
    &>div#homeArticleVideoHints {
    width:90%;
                           background:${theme.$light};
    height:420px;
    padding:${remsize(10)};
    };
    &>div#recentUpdate {
      display:block;
      ${boxProperty(`90%`, remsize(350), `auto`, remsize(5), theme.$light)};
    };

    &>div#pageAds {
      width:90%;
      padding:${remsize(10)};
      background:${theme.$light};
    }
  `)};

  ${mediaQueries(`laptop`)(`
  width:70%;
  `)};
`;

const HomeArticle = () => (
  <Container id="homeArticle">
    <Div>
      <LPHeading />
      <PageAds />
      <div id="homeArticleVideoHints">
        <LPVideo />
        <LPHints />
      </div>
      <RecentUpdate />
    </Div>
  </Container>
);

export default HomeArticle;
