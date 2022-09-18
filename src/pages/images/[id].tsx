import React, { FC } from "react";
import styled from "styled-components";
import ImagesDownloadTemplate from "../../templates/ImagesDownloadTemplate";
import boxProperty from "../../fp/BoxProperty";

const Container = styled.div`
  //${boxProperty("100%", `100%`, "auto")};
`;

const ImagesDownload: FC = () => (
  <Container id="musicDownload">
    <ImagesDownloadTemplate />
  </Container>
);

export default ImagesDownload;
