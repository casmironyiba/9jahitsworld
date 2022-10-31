import React, { FC } from "react";
import displayFlex from "../fp/DisplayFlex";
import styled from "styled-components";
import { mediaQueries } from "../fp/MediaQueries";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    width:60%;
    position:relative;

    img {
      width:100%;
      height:100%;
    }
    `)};

  ${mediaQueries(`mobileM`)(`
    width:50%;
    `)};

  ${mediaQueries(`mobileL`)(`
    width:40%;
    `)};

  ${mediaQueries(`tablet`)(`
    width:28%;
    margin-top:${remsize(10)};
    `)};
  ${mediaQueries(`laptop`)(`
    width: 19%;
    height:90%;
    bottom: 20px;
    margin-top:${remsize(40)};
    `)};
`;

const H1 = styled.h1`
  color: white;
  ${displayFlex("flex-start", "center", "column nowrap")};
  ${boxProperty(remsize(275), remsize(100))}
  font-weight:800;
  font-size: 50px;
  div {
    margin-left: auto;
    margin-top: ${remsize(-15)};
  }
`;

//<img src="/9jahitsLogo.svg" alt="LOGOs" id="logo" />
const Logo: FC = () => (
  <Container>
    <H1>
      NaijaHitsWorld <div>.com</div>
    </H1>
  </Container>
);

export default Logo;
