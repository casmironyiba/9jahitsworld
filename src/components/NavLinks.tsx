import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import { mediaQueries } from "../fp/MediaQueries";
import remsize from "../fp/Remsize";
import MusicLink from "./MusicLink";
import HomeLink from "./HomeLink";
import VideosLink from "./VideosLink";
import AdminLink from "./AdminLink";
import GospelMusicLink from "./GospelMusicLink";
import MixTapeLink from "./MixTapeLink";
import ArticlesLink from "./ArticlesLink";
import theme from "./Themes";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(remsize(100), remsize(200), 0, 0, theme.$black)};
    position: relative;
    ${boxProperty(`100%`, `100%`, `auto`, remsize(5))};
    ${displayFlex("space-around", "center", `column nowrap`)};
    font-size:.9rem;
    letter-spacing:${remsize(2)};

    `)};

  ${mediaQueries(`laptop`)(`
      justify-content:space-between;
      flex-flow:row nowrap;
      &:last-child {margin-left:auto};
      `)};
`;

const Div = styled.div`
  ${mediaQueries(`mobileS`)(`

    ${boxProperty("100%", `100%`, "auto")};
    ${displayFlex("space-around", "center", `column nowrap`)};
      & a {
      text-decoration: none;
      color: ${theme.$white};
      ${boxProperty(`100%`, remsize(30), remsize(5))};
      ${displayFlex(`center`, `center`)};
      font-size:1.1rem;
      &:last-child {width:100%};
      &:hover {color: ${theme.$red};
    };
  `)};

  ${mediaQueries(`laptop`)(`
    flex-flow: row nowrap;
    & a,#homeIcon {
      position:relative;
     font-weight:800;
     transition: .4s linear;

     &:hover {
      color:${theme.$red};
     }
    }
      `)};
`;
const Links = () => (
  <Container id="navlink">
    <Div>
      <HomeLink />

      <MusicLink />

      <VideosLink />

      <MixTapeLink />

      <GospelMusicLink />

      <ArticlesLink />
      <div>
        <AdminLink />
      </div>
    </Div>
  </Container>
);

export default Links;
