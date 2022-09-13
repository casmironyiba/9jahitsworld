import styled from "styled-components";
import { mediaQueries } from "../fp/MediaQueries";
import remsize from "../fp/Remsize";
import LPNavigation from "./LpNavigation";
import OurServices from "./OurServices";

const theme = {
  $dark: "#333333",
  $lightgreen: "lightgreen",
  $light: "#eeeeee",
};

const Container = styled.ul`
  ${mediaQueries(`mobileS`)(`
    width:90%;
    padding:${remsize(5)};
    background:${theme.$light};

    ul#ourServices {
      margin-top:${remsize(30)};
      width:100%;
    }
    `)};

  ${mediaQueries(`mobileL`)(`
    position:relative;
    bottom:${remsize(25)};
  `)};

  ${mediaQueries(`tablet`)(`
  `)};

  ${mediaQueries(`laptop`)(`
    `)};
`;

const LPHints = () => (
  <Container id="lpHints">
    <LPNavigation />
    <OurServices />
  </Container>
);
export default LPHints;
