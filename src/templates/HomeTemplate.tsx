import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import { mediaQueries } from "../fp/MediaQueries";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Layout from "../components/Layout";
import HomeArticle from "./HomeArticle";

const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
  ${boxProperty(`100%`, `100%`)};
                           `)};

  ${mediaQueries(`laptop`)(`
    ${boxProperty(`100%`, `100%`)};
                           `)};
`;

const HomeTemplate = () => {
  return (
    <Container id="homeTemplate">
      <Header />
      <Main>
        <HomeArticle />
      </Main>
      <Footer />
    </Container>
  );
};

export default HomeTemplate;
