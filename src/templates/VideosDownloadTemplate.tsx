import React, { FC } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import VideosDownloadArticle from "./VideosDownloadArticle";
import boxProperty from "../fp/BoxProperty";
import PageArticle from "./PageArticle";
import RecentUpdate from "../components/RecentUpdate";

const Container = styled(Layout)`
  ${boxProperty("100%", `100%`, "auto")};
`;

const VideosDownloadTemplate: FC = () => (
  <Container id="downloadsTemplate">
    <Header />
    <Main>
      <PageArticle>
        <VideosDownloadArticle />
        <RecentUpdate />
      </PageArticle>
    </Main>
    <Footer />
  </Container>
);

export default VideosDownloadTemplate;
