import React, { FC } from "react";
import styled from "styled-components";
import MusicDownloadTemplate from "../../templates/MusicDownloadTemplate";
import boxProperty from "../../fp/BoxProperty";

const Container = styled.div`
  //${boxProperty("100%", `100%`, "auto")};
`;

const MusicDownload: FC = () => (
  <Container id="musicDownload">
    <MusicDownloadTemplate />
  </Container>
);

export default MusicDownload;
