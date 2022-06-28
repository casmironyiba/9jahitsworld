import React, { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import { mediaQueries } from "../fp/MediaQueries";
import remsize from "../fp/Remsize";
import AdContainer from "./AdContainer";

const theme = {
  $dark: "#333333",
};

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`30%`, `100%`, 0, remsize(10), theme.$dark)};
    padding-bottom:0px;
    padding-top:0px;
    ${displayFlex(`space-around`, `center`, `column nowrap`)};
    `)}
`;

const Hint: FC = () => (
  <Container id="hintContainer">
    <AdContainer />
    <AdContainer />
    <AdContainer />
    <AdContainer />
    <AdContainer />
  </Container>
);
export default Hint;
