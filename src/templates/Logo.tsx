import React, { FC } from "react";
import displayFlex from "../fp/DisplayFlex";
import styled from "styled-components";
import { mediaQueries } from "../fp/MediaQueries";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    width:90%;
    ${boxProperty(remsize(270), remsize(70))};
    position:relative;
    margin:auto;
    
    `)};

  ${mediaQueries(`mobileM`)(`
    width:350px;
    height:80px;
    `)};

  ${mediaQueries(`mobileL`)(`
    //width:40%;
    `)};

  ${mediaQueries(`tablet`)(`
    width:50%;
    `)};

  ${mediaQueries(`laptop`)(`
    width: 380px;
    `)};
`;

const H1 = styled.h1`
  ${mediaQueries("mobileS")(`
    ${boxProperty(`100%`, `100%`)};
    color: white;
    ${displayFlex("center", "center", "column nowrap")};
    font-weight:400;
    font-size: 43px;
    span {
      position:relative;
      left:120px;
      margin-top: ${remsize(-24)};
      font-size:35px;
    }

    `)};
  ${mediaQueries("mobileL")(`
                            
    font-weight:800;
    font-size: 50px;
    `)};

  ${mediaQueries("tablet")(`
    `)};
`;

//<img src="/9jahitsLogo.svg" alt="LOGOs" id="logo" />
const Logo: FC = () => (
  <Container>
    <H1>
      NaijaHitsWorld <span>.com.ng</span>
    </H1>
  </Container>
);

export default Logo;
