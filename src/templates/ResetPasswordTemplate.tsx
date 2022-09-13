import React, { FC } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";
import ResetPasswordArticle from "./ResetPasswordArticle";
import Layout from "../components/Layout";
import { mediaQueries } from "../fp/MediaQueries";
import boxProperty from "../fp/BoxProperty";

const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
  ${boxProperty(`100%`, `100vh`)};
  
  `)};
`;

const ResetPasswordTemplate: FC = () => (
  <Container id="resetPasswordTemplate">
    <Header />
    <Main>
      <ResetPasswordArticle />
    </Main>
    <Footer />
  </Container>
);

export default ResetPasswordTemplate;
