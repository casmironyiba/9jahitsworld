import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
import styled from "styled-components";
import { mediaQueries } from "../fp/MediaQueries";

const theme = {
  $light: "#eeeeee",
};

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    //${boxProperty(`90%`, remsize(300))};
    background:${theme.$light};
    video {
     width:300px;
    }

    &>video {
      ${boxProperty(`100%`, `100%`)};
    }
    `)};

  ${mediaQueries(`tablet`)(`
    //width:${remsize(350)};
    `)};

  ${mediaQueries(`laptop`)(`
    width:${remsize(600)};
    video {
     width:100%;
     margin-top:50px;
    }
    `)};
`;

const LPVideo = () => (
  <Container id="lpVideo">
    <video src="textVideo.mp4" autoPlay controls />
  </Container>
);
export default LPVideo;
