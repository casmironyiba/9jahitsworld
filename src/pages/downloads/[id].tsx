import DownloadsTemplate from "../../templates/DownloadsTemplate";
import styled from "styled-components";
import { mediaQueries } from "../../fp/MediaQueries";
import boxProperty from "../../fp/BoxProperty";

const Container = styled.div`
  ${mediaQueries("mobileS")(`
                          //${boxProperty("100%", `70%`, "auto")};

                          `)};
`;

const Downloads = () => (
  <Container id="downloads">
    <DownloadsTemplate />
  </Container>
);

export default Downloads;
