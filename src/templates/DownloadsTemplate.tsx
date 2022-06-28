import React, { FC } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import DownloadsArticle from "./downloadsArticle";
import boxProperty from "../fp/boxProperty";
import PageArticle from "./pageArticle";
import RecentUpdate from "../components/recentUpdate";

const Container = styled(Layout)`
  ${boxProperty("100%", `100%`)};
`;

const DownloadsTemplate: FC = () => (
  <Container id="downloadsTemplate">
    <Header />
    <Main>
      <PageArticle>
        <DownloadsArticle />
        <RecentUpdate />
      </PageArticle>
    </Main>
    <Footer />
  </Container>
);

export default DownloadsTemplate;
