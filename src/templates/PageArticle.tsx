import React, { FC, useEffect } from "react";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import remsize from "../fp/Remsize";
import Hint from "../components/Hint";
import RecentUpdate from "../components/RecentUpdate";
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
    `)};

  ${mediaQueries(`laptop`)(`
    width:90%;
                         `)};
`;

const Div = styled.article`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`95%`, "90%", `auto`, remsize(10))};
    background: ${theme.$light};
    ${displayFlex(`flex-start`, "flex-start", `row nowrap`)};

    div#pageArticle__article--articleCard {
      ${boxProperty(`60%`, `100%`, "auto")};
      height:min-height:${remsize(2000)};
      ${displayFlex(`space-around`, "center", `column nowrap`)};
    };


    div#recentUpdate {
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
    div#recentUpdate {
      display:flex;
    };

    div#pageArticle__article--articleCard {
     width: 50%;
     padding:${remsize(10)};
    font-size:14px;
    }
      `)};

  ${mediaQueries(`laptop`)(`
    width:80%;
    `)};
`;
const PageArticle: FC = (props: any) => {
  useEffect(() => {
    const element: any = document.querySelector(
      "#pageArticle__article--article"
    );
    //element?.style.background = "red";
  }, []);
  return (
    <Container id="pageArticle">
      <PageAds />
      <Div id="pageArticle__article">
        <div id="pageArticle__article--articleCard">{props.children}</div>
        <RecentUpdate />
      </Div>
      <div id="goBackButton__container"></div>
    </Container>
  );
};

export default PageArticle;
