import React, { FC } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import MusicDownloadArticle from "./MusicDownloadArticle";
import boxProperty from "../fp/BoxProperty";
import PageArticle from "./PageArticle";
import RecentUpdate from "../components/RecentUpdate";

const Container = styled(Layout)`
  ${boxProperty("100%", `100%`, "auto")};
`;

const MusicDownloadsTemplate: FC = () => (
  <Container id="downloadsTemplate">
    <Header />
    <Main>
      <PageArticle>
        <MusicDownloadArticle />
        <RecentUpdate />
      </PageArticle>
    </Main>
    <Footer />
  </Container>
);

export default MusicDownloadsTemplate;
