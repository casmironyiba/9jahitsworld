import React, { FC } from "react";
import styled from "styled-components";
import { mediaQueries } from "../fp/MediaQueries";

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
    `)};
  ${mediaQueries(`laptop`)(`
    width: 19%;
    height:90%;
    bottom: 20px;
    `)};
`;

const Logo: FC = () => (
  <Container>
    <img src="/9jahitsLogo.svg" alt="LOGOs" id="logo" />
  </Container>
);

export default Logo;
