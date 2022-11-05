import styled from "styled-components";
import Hamburger from "../components/Hamburger";
import displayFlex from "../fp/DisplayFlex";
import NavBar from "./NavBar";
import Logo from "./Logo";
import remsize from "../fp/Remsize";
import boxProperty from "../fp/BoxProperty";
import { mediaQueries } from "../fp/MediaQueries";
import theme from "../components/Themes";
import Link from "next/link";
import SocialPages from "../components/SocialPages";
import Search from "./Search";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
  grid-area: h;
  ${boxProperty(`100%`, remsize(156), 0, 0, theme.$black)};
  `)};

  ${mediaQueries("tablet")(`
    padding:10px;

    div#headerContainer {
     width:80%;
     ${displayFlex("space-between", "center", "column nowrap")};
      margin:auto;
    }
  `)};
`;

const Header2Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${displayFlex(`space-between`, "center", `column nowrap`)};
    ${boxProperty(`100%`, `20%`)};
    //background:#20232a;
    background:${theme.$black};

    `)}
`;
const Header1Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, `80%`)}
    margin: auto;
    ${displayFlex(`space-between`, `center`, `row nowrap`)};
    border-bottom: 1px solid ${theme.$dark};

    & > div#contactsusContainer {
      width: 20%;
      ${displayFlex("center", "center")};
    }

    & > div#socialPagesContainer {
      width: 20%;
    }

 `)};

  ${mediaQueries("tablet")(`
    width:100%;
   `)};
`;
const H3 = styled.h5`
  ${mediaQueries("mobileS")(`
    ${boxProperty(remsize(90), remsize(30))};
    ${displayFlex("center", "center")};
    font-weight: 600;
    font-size:0.7rem;
    color: white;
    border: 1px solid ${theme.$palevioletred};
    display:none;
    a {
      color: ${theme.$white};
      text-decoration: none;
    }

    `)};
  ${mediaQueries("tablet")(`
    ${displayFlex("center", "center")};

    `)};
`;
const Header = () => (
  <Container id="header">
    <div id="headerContainer">
      <Header1Container>
        <div id="socialPagesContainer">
          <SocialPages />
        </div>
        <Logo />
        <div id="contactsusContainer">
          <H3>
            <Link href="/contacts">CONTACT US </Link>
          </H3>
        </div>
      </Header1Container>
      <Header2Container>
        <Hamburger />
        <NavBar />
      </Header2Container>
    </div>
  </Container>
);

export default Header;
