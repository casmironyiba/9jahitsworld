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
    `)};
`;

const DIV = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${displayFlex(`space-between`, "center", `column nowrap`)};
    ${boxProperty(`100%`, `25%`)};
    //background:#20232a;
    background:${theme.$black};

    `)}
`;
const Header1Container = styled.div`
  ${boxProperty(`100%`, `75%`)}
  margin: auto;
  ${displayFlex(`space-between`, `center`, `row nowrap`)};
  border-bottom: 1px solid ${theme.$palevioletred};
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
      display:inline-block;                       

    `)};
`;
const Header = () => (
  <Container id="header">
    <Header1Container>
      <SocialPages />
      <Logo />
      <H3>
        <Link href="/contacts">CONTACT US </Link>
      </H3>
    </Header1Container>
    <DIV>
      <Hamburger />
      <NavBar />
    </DIV>
  </Container>
);

export default Header;
