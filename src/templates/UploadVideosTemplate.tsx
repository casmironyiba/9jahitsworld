import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";
import UploadVideosForm from "./UploadVideosForm";
import boxProperty from "../fp/BoxProperty";
import { mediaQueries } from "../fp/MediaQueries";
import Layout from "../components/Layout";

const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
  ${boxProperty(`100%`, `100%`)};
                           `)};

  ${mediaQueries(`laptop`)(`
    ${boxProperty(`100%`, `100%`)};
                           `)};
`;

const UploadVideosTemplate = () => {
  return (
    <Container id="uploadVideosTemplate">
      <Header />
      <Main>
        <UploadVideosForm />
      </Main>
      <Footer />
    </Container>
  );
};
export default UploadVideosTemplate;
