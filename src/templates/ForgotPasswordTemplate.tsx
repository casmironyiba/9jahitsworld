import React, { FC } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";
import ForgotPasswordArticle from "./ForgotPasswordArticle";
import Layout from "../components/Layout";
import { mediaQueries } from "../fp/MediaQueries";
import boxProperty from "../fp/BoxProperty";

const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
  ${boxProperty(`100%`, `100vh`)};
  
  `)};
`;

const ForgotPasswordTemplate: FC = () => (
  <Container id="forgotPasswordTemplate">
    <Header />
    <Main>
      <ForgotPasswordArticle />
    </Main>
    <Footer />
  </Container>
);

export default ForgotPasswordTemplate;
