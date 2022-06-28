import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";
import UploadMusicForm from "./UploadMusicForm";
import Layout from "../components/Layout";
import { mediaQueries } from "../fp/MediaQueries";
import BoxProperty from "../fp/BoxProperty";

const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
    ${BoxProperty(`100%`, `100%`)};
    `)};

  ${mediaQueries(`laptop`)(`
      ${BoxProperty(`100%`, `100%`)};
      `)};
`;

const UploadMusicTemplate = () => {
  return (
    <Container id="uploadMusicTemplate">
      <Header />
      <Main>
        <UploadMusicForm />
      </Main>
      <Footer />
    </Container>
  );
};
export default UploadMusicTemplate;
