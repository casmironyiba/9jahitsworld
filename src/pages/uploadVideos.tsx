import UploadVideosTemplate from "../templates/UploadVideosTemplate";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";

const Container = styled.div`
  ${boxProperty(`100%`, `100vh`)};
`;

const UploadVideos = () => (
  <Container id="uploadVideos">
    <UploadVideosTemplate />
  </Container>
);

export default UploadVideos;
