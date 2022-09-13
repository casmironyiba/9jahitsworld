import React, { FC } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";
import RegisterArticle from "./RegisterArticle";
import { mediaQueries } from "../fp/MediaQueries";
import boxProperty from "../fp/BoxProperty";
import Layout from "../components/Layout";

const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
  ${boxProperty(`100%`, `100vh`)};
  
  `)};
`;
const RegisterTemplate: FC = () => (
  <Container id="registerTemplate">
    <Header />
    <Main>
      <RegisterArticle />
    </Main>
    <Footer />
  </Container>
);

export default RegisterTemplate;
