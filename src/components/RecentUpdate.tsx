import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
import { mediaQueries } from "../fp/MediaQueries";
import displayFlex from "../fp/DisplayFlex";

const theme = {
  $purple: "purple",
};

const Container = styled.div`
  ${mediaQueries("mobileS")(`
    ${boxProperty(remsize(300), remsize(400), `auto`, remsize(10))};
    background: ${theme.$purple};
    
    div {
      padding:10px;

      a {
        ${displayFlex(`center`, "center", `row wrap`)};
        text-decoration:none;
      }

    }
  `)};

  ${mediaQueries(`laptop`)(`
    width:${remsize(650)};
  `)};
`;

const RecentUpdate = () => {
  return <Container id="recentUpdate">hi</Container>;
};
export default RecentUpdate;
