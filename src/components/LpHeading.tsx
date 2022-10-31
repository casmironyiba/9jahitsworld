import styled from "styled-components";
import remsize from "../fp/Remsize";
import { mediaQueries } from "../fp/MediaQueries";
import boxProperty from "../fp/BoxProperty";
import textProperty from "../fp/TextProperty";

const theme = {
  $black: "black",
  $lightgreen: "lightgreen",
  $white: "white",
};

const Container = styled.h4`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, remsize(60), "auto", remsize(5))};
    margin-top:0px;
    ${textProperty(
      theme.$white,
      "1rem",
      400,
      "center",
      `capitalize`,
      remsize(2)
    )};
    background: #333333;
    line-height: 18px;
    letter-spacing: ${remsize(2.5)};
  `)};
`;

const LPHeading = () => (
  <Container id="lpHeading">
    Welcome to 9jaHitsworld Nigerias #1 Music & Entertainment website.{" "}
  </Container>
);
export default LPHeading;
