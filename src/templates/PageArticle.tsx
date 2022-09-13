import React, { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import remsize from "../fp/Remsize";
import Hint from "../components/Hint";
import { mediaQueries } from "../fp/MediaQueries";
import PageAds from "../components/PageAds";
import GoBackButton from "../components/GoBackButton";

const theme = {
  $light: "#eeeeee",
};

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    width:100%;
    margin:auto;
    height:${remsize(1300)};
    min-height:${remsize(1900)};
    max-height:${remsize(2500)};
    padding:10px;
    ${displayFlex(`space-around`, `center`, `column nowrap`)};
    opacity:1;
    button#goBackButton {
      margin-top:${remsize(25)};
    };
    `)};

  ${mediaQueries(`laptop`)(`
    width:90%;
                         `)};
`;

const Div = styled.article`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`95%`, "90%", `auto`, remsize(10))};
    background: ${theme.$light};
    ${displayFlex(`space-between`, "center", `row nowrap`)};

    div#articleCard {
      ${boxProperty(`60%`, `100%`, "auto")};
      //min-height:${remsize(2000)};
      ${displayFlex(`space-around`, "center", `column nowrap`)};
    };


    div#hintContainer {
      display:none;
    }
  `)}

  ${mediaQueries(`mobileM`)(`
    width:90%;
    `)};

  ${mediaQueries(`mobileL`)(`
    width:95%;
    `)};
  ${mediaQueries("tablet")(`
    div#hintContainer {
      display:flex;
    }
      `)};

  ${mediaQueries(`laptop`)(`
    width:80%;
    `)};
`;
const PageArticle: FC = (props: any) => (
  <Container id="pageArticle">
    <PageAds />
    <Div id="article">
      <div id="articleCard">{props.children}</div>
      <Hint />
    </Div>
    <div id="goBackButton__container">
      <GoBackButton />
    </div>
  </Container>
);

export default PageArticle;
