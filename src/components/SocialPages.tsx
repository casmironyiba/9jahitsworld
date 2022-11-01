import React from "react";

import WhatsApp from "@mui/icons-material/WhatsApp";
import Facebook from "@mui/icons-material/FacebookRounded";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
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
    ${boxProperty(remsize(200), remsize(30), `auto`, remsize(5))};
    color: ${theme.$white};
    a {
      ${boxProperty(remsize(100), remsize(30))};
      ${displayFlex(`space-between`, "center", `row nowrap`)};
      text-decoration: none;
    }
    display: none;

  `)};
  ${mediaQueries(`tablet`)(`
    ${displayFlex(`space-around`, "center", `row nowrap`)};
    width:20%;
    font-size:13px;
    background:blue;
   `)};
`;

const Div = styled.div`
  ${boxProperty(remsize(40), remsize(40), "auto", remsize(2), theme.$dark)};
  ${displayFlex("center", "center")};
  border-radius: 50%;
`;

export default function SocialPages() {
  return (
    <Container id="contactsMe">
      <Div>
        <Link href="#" passHref>
          <Facebook fontSize="small" />
        </Link>
      </Div>
      <Div>
        <Link href="#" passHref>
          <YouTube fontSize="small" />
        </Link>
      </Div>

      <Div>
        <Link href="#" passHref>
          <WhatsApp fontSize="small" />
        </Link>
      </Div>
      <Div>
        <Link href="#" passHref>
          <Twitter fontSize="small" />
        </Link>
      </Div>
    </Container>
  );
}
