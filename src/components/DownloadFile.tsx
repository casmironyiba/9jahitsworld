import React, { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
import { mediaQueries } from "../fp/MediaQueries";
import theme from "../components/Themes";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, `100%`, "auto", remsize(5), theme.$yellow)}
  `)};

  ${mediaQueries(`tablet`)(`
    width:100%;
    `)};
`;

const DownloadFile: FC = (props: any) => (
  <Container id="downloadFile">{props.children}</Container>
);

export default DownloadFile;
