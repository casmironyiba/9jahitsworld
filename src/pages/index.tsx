import type { NextPage } from "next";
import HomeTemplate from "../templates/HomeTemplate";
import styled from "styled-components";
import Head from "next/head";

const Container = styled.div``;

const Home: NextPage = () => {
  return (
    <Container id="home">
      <Head>
        <title>9jaHitsWorld</title>
        <meta property="og:title" content="9jaHitsWorld" key="title" />
      </Head>
      <HomeTemplate />
    </Container>
  );
};

export default Home;
