import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import { mediaQueries } from "../fp/MediaQueries";
import remsize from "../fp/Remsize";
import MusicLink from "./MusicLink";
import HomeLink from "./HomeLink";
import VideosLink from "./VideosLink";
import ImagesLink from "./ImagesLink";
import AdminLink from "./AdminLink";

const theme = {
  $white: "white",
  $green: "green",
};

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, `100%`, `auto`, remsize(5))};
    ${displayFlex("space-around", "center", `column nowrap`)};
    font-size:.9rem;
    letter-spacing:${remsize(2)};
    a {
      text-decoration: none;
      color: ${theme.$white};
    }

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
      &>a {
    ${boxProperty(`100%`, remsize(30), remsize(5))};
      ${displayFlex(`center`, `center`)};
      &:last-child {width:100%};
      &:hover {background: ${theme.$green};
    };
  `)};

  ${mediaQueries(`laptop`)(`
    flex-flow: row nowrap;
      `)};
`;
const Links = () => (
  <Container id="navlink">
    <Div>
      <HomeLink />

      <MusicLink />

      <VideosLink />

      <ImagesLink />

      <AdminLink />
    </Div>
  </Container>
);

export default Links;
