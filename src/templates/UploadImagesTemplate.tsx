import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";
import Layout from "../components/Layout";
import boxProperty from "../fp/BoxProperty";
import { mediaQueries } from "../fp/MediaQueries";
import UploadImagesForm from "./UploadImagesForm";

const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
  ${boxProperty(`100%`, `100%`)};
                           `)};

  ${mediaQueries(`laptop`)(`
    ${boxProperty(`100%`, `100%`)};
                           `)};
`;

const UploadImagesTemplate = () => {
  return (
    <Container id="uploadImagesTemplate">
      <Header />
      <Main>
        <UploadImagesForm />
      </Main>
      <Footer />
    </Container>
  );
};
export default UploadImagesTemplate;
