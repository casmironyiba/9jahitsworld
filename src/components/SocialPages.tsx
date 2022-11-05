import React from "react";

import WhatsApp from "@mui/icons-material/WhatsApp";
import Facebook from "@mui/icons-material/FacebookRounded";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import remsize from "../fp/Remsize";
import Link from "next/link";
import theme from "./Themes";
import { mediaQueries } from "../fp/MediaQueries";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(remsize(200), remsize(50), `auto`, remsize(0))};
    color: ${theme.$white};
    display: none;

  `)};
  ${mediaQueries(`tablet`)(`
    ${displayFlex(`space-between`, "center", `row nowrap`)};
    width:170px;
    position:relative;
    `)};

  ${mediaQueries(`laptop`)(`
    width:200px;

    `)};
`;

const Div = styled.div`
  ${boxProperty(remsize(40), remsize(40), "auto", remsize(2), theme.$dark)};
  ${displayFlex("center", "center")};
  border-radius: 50%;

  a {
    color: white;
  }
  a:hover {
    color: red;
  }
  a:active {
    color: green;
  }
  a:visited {
    //color: brown;
  }
  & a {
    position: relative;
    font-weight: 800;
    transition: 0.4s linear;

    &:hover {
      color: ${theme.$red};
    }
  }
`;

export default function SocialPages() {
  return (
    <Container id="contactsMe">
      <Div>
        <a href="#">
          <Facebook fontSize="small" />
        </a>
      </Div>

      <Div>
        <a href="#">
          <YouTube fontSize="small" />
        </a>
      </Div>

      <Div>
        <a href="#">
          <WhatsApp fontSize="small" />
        </a>
      </Div>

      <Div>
        <a href="#">
          <Twitter fontSize="small" />
        </a>
      </Div>
    </Container>
  );
}
