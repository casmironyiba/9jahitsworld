import styled from "styled-components";
import { mediaQueries } from "../fp/MediaQueries";
import textProperty from "../fp/TextProperty";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";

const theme = {
  $purple: "purple",
};

const H6 = styled.h6`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(remsize(500), remsize(100))};
    margin:auto;
    line-height:${remsize(20)};
                            
    ${textProperty(theme.$purple, `.9rem`, 400, `center`)};
  `)};

  ${mediaQueries(`laptop`)(`
    font-size:1.1rem;
  `)};
`;
const AboutME = () => (
  <H6 id="aboutMe">
    I'm Mandate,the owner of 9jaHitsWorld.com, i am a Nigerian based blogger,
    Awka precisely. Here we help upcomming artists to advertise their songs at
    cheaper rate, we also advertise all kinds of business.
  </H6>
);

export default AboutME;
