import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import { mediaQueries } from "../fp/MediaQueries";
import remsize from "../fp/Remsize";
import textProperty from "../fp/TextProperty";

const theme = {
  $purple: "purple",
};

const H6 = styled.h6`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(remsize(500), remsize(130), `auto`, remsize(5))};
    ${textProperty(theme.$purple, "1rem", 400, `center`)};
    line-height:${remsize(20)};
    font-size:1rem;
  `)};

  ${mediaQueries(`laptop`)(`
    font-size:1rem;
    
  `)};
`;
const AboutDeveloper = () => (
  <H6 id="aboutDeveloper">
    I am Casmir Chijioke, a Nigerian based Web Developer/Software Engineer from
    Awka precisely.I am a fullstack web developer, The founder of
    NaijaForez.com. We create all kinds of websites, applications, templates,
    web design and Graphics design etc. We have a bootcamp where we teach
    students web development/coding.
  </H6>
);
export default AboutDeveloper;
