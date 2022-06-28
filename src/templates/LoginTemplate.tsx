import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";
import LoginArticle from "./LoginArticle";
import Layout from "../components/Layout";
import { mediaQueries } from "../fp/MediaQueries";
import boxProperty from "../fp/BoxProperty";

const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
  ${boxProperty(`100%`, `100vh`)};
  
  `)};
`;

const LoginTemplate = () => (
  <Container id="loginTemplate">
    <Header />
    <Main>
      <LoginArticle />
    </Main>
    <Footer />
  </Container>
);

export default LoginTemplate;
