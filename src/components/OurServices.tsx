import styled from "styled-components";
import { mediaQueries } from "../fp/MediaQueries";
import displayFlex from "../fp/DisplayFlex";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
import theme from "./Themes";

const Ul = styled.ul`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(remsize(500), remsize(200), `auto`, remsize(2))};
    ${displayFlex("space-around", "center", `column nowrap`)};
  `)}
`;

const H4 = styled.h4`
  ${mediaQueries(`mobileS`)(`
    font-size: .8rem;
    border-bottom:1px solid ${theme.$black};
    margin-bottom: 10px;
    `)};

  ${mediaQueries("mobileM")(`
    font-size: .9rem;
  `)};

  ${mediaQueries(`laptop`)(`
    font-size: 1.2rem;
    `)};
`;

const Li = styled.li`
  ${mediaQueries(`mobileS`)(`
    margin-bottom: 20px;
    font-size: .8rem;
  `)}
`;

const OurServices = () => (
  <Ul id="ourServices">
    <H4>We offer the following services</H4>
    <Li>Digital marketing</Li>
    <Li>All kinds of advertisement</Li>
    <Li>Music promotions</Li>
    <Li>OnLine marketing</Li>
    <Li>News</Li>
    <Li>Sports & Arts. etc</Li>
  </Ul>
);

export default OurServices;
