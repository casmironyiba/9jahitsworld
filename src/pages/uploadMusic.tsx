import styled from "styled-components";
import { mediaQueries } from "../fp/MediaQueries";
import boxProperty from "../fp/BoxProperty";
import UploadMusicTemplate from "../templates/UploadMusicTemplate";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, `100vh`)};
  `)}
`;

const UploadMusic = () => (
  <Container id="uploadMusic">
    <UploadMusicTemplate />
  </Container>
);

export default UploadMusic;
