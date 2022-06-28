import React, { FC } from "react";
import styled from "styled-components";
import remsize from "../fp/Remsize";
import boxProperty from "../fp/BoxProperty";
import { mediaQueries } from "../fp/MediaQueries";

const theme = {
  $light: "#eeeeee",
};

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, remsize(200), 0, remsize(10), theme.$light)};
    text-align: center;
    `)}
`;

const AdContainer: FC = () => <Container id="adContainer">Advert</Container>;
export default AdContainer;
