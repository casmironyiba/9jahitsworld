import React, { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import remsize from "../fp/remsize";
import { mediaQueries } from "../fp/mediaQueries";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, `100%`, `auto`, remsize(10), "lightblue")};
    min-width:300px;
    max-width:700px;
  `)};

  ${mediaQueries(`tablet`)(`
    width:100%;
    `)};
`;

const DownloadFile: FC = (props: any) => (
  <Container id="downloadFile">{props.children}</Container>
);

export default DownloadFile;
