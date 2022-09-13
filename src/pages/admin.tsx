import React from "react";
import styled from "styled-components";
import Header from "../templates/Header";
import Main from "../templates/Main";
import Footer from "../templates/Footer";
import boxProperty from "../fp/BoxProperty";
import Layout from "../components/Layout";
import AdminArticle from "../templates/AdminArticle";

const Container = styled(Layout)`
  ${boxProperty(`100%`, `100vh`)};
`;

const Admin = () => (
  <Container id="admin">
    <Header />
    <Main>
      <AdminArticle />
    </Main>
    <Footer />
  </Container>
);
export default Admin;
