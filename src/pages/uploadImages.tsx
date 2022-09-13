import UploadImagesTemplate from "../templates/UploadImagesTemplate";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";

const Container = styled.div`
  ${boxProperty(`100%`, `100vh`)};
`;

const UploadImages = () => (
  <Container id="uploadImages">
    <UploadImagesTemplate />
  </Container>
);

export default UploadImages;
