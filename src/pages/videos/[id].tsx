import React, { FC } from "react";
import styled from "styled-components";
import VideosDownloadTemplate from "../../templates/VideosDownloadTemplate";
import boxProperty from "../../fp/BoxProperty";

const Container = styled.div`
  //${boxProperty("100%", `100%`, "auto")};
`;

const VideosDownload: FC = () => (
  <Container id="videosDownload">
    <VideosDownloadTemplate />
  </Container>
);

export default VideosDownload;
